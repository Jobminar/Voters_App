import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'

import router from "./routes.js";

const app = express();

app.use(cors());
dotenv.config();
app.use(express.json());

app.use('/', router);

mongoose.connect(process.env.MONGO_URL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
 
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
