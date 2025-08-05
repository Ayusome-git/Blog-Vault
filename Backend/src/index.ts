import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
const app = express();
app.use(express.json());

const client = new PrismaClient();

app.get("/",(req,res)=>{
    res.json({
        message:"server running"
    })
})

app.get("/user/signup",(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

})
app.listen(3000);