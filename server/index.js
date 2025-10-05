import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

connectDB();
const port = process.env.PORT || 5001;

// console.log(process.env.MongoURI);

const app = express();
app.use(express.json());


app.listen(port, () => console.log(`Server is running on port ${port}`));