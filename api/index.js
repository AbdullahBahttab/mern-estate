import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';
dotenv.config();

mongoose.connect(process.env.Mongo).then(()=>{
    console.log('connected to mongodb');
})
.catch
((err)=>{console.error(err)});

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('listening on port 3000');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);


