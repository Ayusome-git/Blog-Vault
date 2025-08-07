import express from "express";
import userRoutes from './routes/user'
import blogRoutes from './routes/blog'
const app = express();

app.get("/",(req,res)=>{
    res.json({
        message:"server running"
    })
})

app.use(express.json());

app.use('/user',userRoutes);
app.use('/blog',blogRoutes)

app.listen(3000);