import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks/useBlogs"
import { useParams } from "react-router-dom";



export function Blog(){
    const {id} = useParams()
    const {loading, blog} = useBlog({id:id || ""});
    if(blog){
        return(
        <div className="w-full">
            <FullBlog 
            id={blog.id}
            name={blog.author.name}
            title={blog.title}
            content={blog.content}
            publishedDate={blog.published.slice(0,10).split('-').reverse().join('-')}
            avatar={""}/>
        </div>
        
    )
    }
    
}