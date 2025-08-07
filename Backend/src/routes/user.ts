import express from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { Router } from "express";
import { signinInput } from "../zod";
import { email } from "zod";

const client = new PrismaClient();

const app = Router()

app.post("/signup",async(req,res)=>{
    const body = req.body;
    const { success } = signinInput.safeParse(body);
    if (!success) {
      return res.status(411).json({message:"invalid input"})
    }
    const userExist= await client.user.findFirst({
        where:{
            email:body.email
        }
    })
    if(userExist) return res.status(409);
    try{
        const user = await client.user.create({
            data:{
                email: body.email,
                password:body.password
            }
        });
        const token = jwt.sign({
            id: user.id
        }, process.env.JWT_SECRET as string);
        res.json({ token });
    } catch(e) {
        res.status(411).json({message:"invalid"});
    }
    
})

app.post("/signin",async(req,res)=>{
    const body= req.body;
    try{
        const user = await client.user.findFirst({
        where:{
            email:body.email,
            password:body.password
            }
        })
        if(!user){
           return res.status(403).json({message:"invalid credentials"})
        }
        const token = jwt.sign({
            id: user.id
        },process.env.JWT_SECRET as string)
        res.status(200).json({token})

    }catch(e){
        res.status(411).json("invalid");
    }
    

})

export default app;