import express from "express"
import { middleware } from "../middleware";
import { Prisma, PrismaClient } from "@prisma/client";
const app = express();

const client = new PrismaClient();


app.post("/",middleware,async(req,res)=>{
    //@ts-ignore
    const id = req.id;
    const title = req.body.title;
    const content= req.body.content;
    try{
        const blog= await client.blog.create({
        data:{
            authorId:id,
            title:title,
            content:content
        }
    })
    res.status(201).json({id:blog.id})
    }catch(e){
        res.status(400).json({
            message:"content not added"
        })
    }
    

})
app.put("/",middleware,async(req,res)=>{
    const id = req.body.id;
    const title =req.body.title;
    const content=req.body.content;
    try{
        const blog= await client.blog.update({
        where:{
            id:id
        },
        data:{
            title:title,
            content:content
        }
    })
    res.status(201).json({
        message:"content updated successfully"
    })
    }catch(e){
        res.status(400).json({
            message:"failed to update content"
        })
    }
})
app.get('/bulk',middleware,async(req,res)=>{

    try{
        const blogs = await client.blog.findMany();
        res.status(200).json({blogs});
    }catch(e){
        res.status(411).json({
            message:"error while fetching data"
        })
    }
})
app.get("/:id",middleware,async(req,res)=>{
    const id = req.params.id;
    const title =req.body.title;
    const content=req.body.content;
    try{
        const blog= await client.blog.findFirst({
        where:{
            id:id as string
        }
    })
    res.status(201).json({
       blog
    })
    }catch(e){
        res.status(411).json({
            message:"Error while fetching blog"
        })
    }
})



export default app;