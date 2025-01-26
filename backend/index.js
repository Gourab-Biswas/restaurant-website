import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import { UserRouter } from './routes/user.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

// Use CORS middleware before setting up routes
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use('/auth', UserRouter);

mongoose.connect('mongodb://127.0.0.1:27017/authentication2')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(5001, () => {
      console.log('Server is running on port 5001');
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });
