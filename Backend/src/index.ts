import express from "express";
import userRoutes from './routes/user'
import blogRoutes from './routes/blog'
import cors from "cors"
const app = express();
app.use(cors());
app.get("/",(req,res)=>{
    res.json({
        message:"server running"
    })
})

app.use(express.json());

app.use('/user',userRoutes);
app.use('/blog',blogRoutes)

app.listen(3000);