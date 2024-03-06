// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import router from './routes.js';
import setupSocket from './Controller/socketController.js'

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json({ limit: '30mb' }));

app.use('/', router);

mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Use the socket controller
setupSocket(server);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


