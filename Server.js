import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'
import router from './routes.js';
import LoginController from "./Controller/LoginController.js";
import KaryakarthaLoginController from "./Controller/KaryakarthaLoginController.js"
const app = express();

// Enable CORS for all routes
app.use(cors());

dotenv.config();
app.use(express.json());

app.use('/',router)

app.post("/signup", LoginController.signup);
app.post("/login", LoginController.login);

app.post("/karyakarthasignup", KaryakarthaLoginController.ksignup);
app.post("/karyakarthalogin", KaryakarthaLoginController.klogin);


mongoose.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
