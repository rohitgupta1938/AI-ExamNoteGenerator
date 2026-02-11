import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/connectDB.js'
import authRoute from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config();


const app=express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 8000;
app.get("/",(req,res)=>{
    res.send({ message: `backend is running on port ${port}` });

})
app.use("/api/auth",authRoute);

app.listen(port,()=>{
    connectDB();
    console.log("backend is listening on port : 8000");
})