import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'
import router from "./routes.js";

import http from 'http';
import { Server } from 'socket.io';
import userController from './Controller/UserController.js'
import adminController from './Controller/AdminController.js'

const app = express();

app.use(cors());
dotenv.config();
app.use(express.json({limit:"30mb"}));

const server = http.createServer(app);


const io = new Server(server);


userController.io = io;
adminController.io = io;


app.post('/usermsg', (req, res) => userController.sendMessageToAdmin(req, res, io));
app.get('/receiveUserMsg', userController.receiveMessageFromUser);

app.post('/adminmsg', adminController.sendMessageToUser);
app.get('/receiveAdminMsg', adminController.receiveMessageFromAdmin);


app.use('/',router);

mongoose.connect(process.env.MONGO_URL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
