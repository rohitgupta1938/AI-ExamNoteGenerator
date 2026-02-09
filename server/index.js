import express from 'express';
import dotenv from 'dotenv'
dotenv.config();

import connectDB from './utils/connectDB.js'

const app=express();
const port=process.env.PORT;
app.get("/",(req,res)=>{
    res.send({message: `{backend is running on port ${port}`})
})
app.listen(port,()=>{
    connectDB();
    console.log("backend is listening on port : 8080");
})