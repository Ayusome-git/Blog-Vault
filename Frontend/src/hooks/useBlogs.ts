import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";


export interface Blogs  {
    id:string
    title: string
    content: string
    published:string
    author:{
        name:string
    }
};

export const useBlog=({id}:{id:string})=>{
    const[loading,setLoading] = useState(true);
    const[blog,setBlog] = useState<Blogs>();

    useEffect(()=>{
        try{
            axios.get<{blog:Blogs}>(`${BACKEND_URL}/blog/${id}`,{
            headers:{
                authorization:localStorage.getItem("token")
            }
        }).then(response=>{
            setBlog(response.data.blog);
            setLoading(false);
        })
        }catch(e){
            setLoading(false);
        }
       
    },[blog])

    return{
        loading,
        blog
    }
}

export const useBlogs=()=>{
    const[loading,setLoading] = useState(true);
    const[blogs,setBlogs] = useState<Blogs[]>([]);

    useEffect(()=>{
        axios.get<{blogs:Blogs[]}>(`${BACKEND_URL}/blog/bulk`,{
            headers:{
                authorization:localStorage.getItem("token")
            }
        }).then(respone=>{
            setBlogs(respone.data.blogs);
            setLoading(false);
        })
    },[])

    return{
        loading,
        blogs
    }
}