import express from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { Router } from "express";
import { signinInput } from "../zod";
import { email } from "zod";
import { middleware } from "../middleware";

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
                name: body.name,
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
    }})

    app.get("/me",middleware,async(req,res)=>{
        //@ts-ignore
        const id=req.id
        try{
            const response= await client.user.findFirst({
                where:{
                    id:id
                },
                select:{
                    name:true,
                    email:true,
                    posts:{
                        select:{
                            id:true,
                            title:true,
                            content:true
                        }
                    }
                    
                }
                
            })
            res.status(200).json(response)
        }catch(e){

        }
    })


    app.put("/me",middleware,async(req,res)=>{
        //@ts-ignore
        const id=req.id
        try{
            const updatedUser=await client.user.update({
                where:{
                    id:id
                },
                data:{
                    name:req.body.name
                },
                include:{
                    posts:{
                        select:{
                            id:true,
                            title:true,
                            content:true
                        }
                    }
                }
            })
            res.json({
                name:updatedUser.name,
                email:updatedUser.email,
                posts:updatedUser.posts
            })

        }catch(e){

        }
    })




export default app;