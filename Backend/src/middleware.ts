import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"

export const middleware=async(req:Request,res:Response,next:NextFunction)=>{
    const header= req.headers["authorization"] || "";
    const decoded= await jwt.verify(header, process.env.JWT_SECRET as string)
    try{
        if(decoded){
        //@ts-ignore
        req.id=decoded.id;
        next();
    }
    }catch(e){
        res.status(403).json({
            message:"not verified"
        })
    }
}

