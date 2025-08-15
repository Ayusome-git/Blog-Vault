import { useParams } from "react-router-dom"
import { useBlog } from "../hooks/useBlogs"
import { UpdateContent } from "../components/UpdateBlog"
import { AppBar } from "../components/Appbar"



export function UpdateBlog(){
const { id } = useParams()
  const { loading, blog } = useBlog({ id: id || "" })
    if(loading){
        return <div>loading......</div>
    }
    return <div>
        <AppBar createBlogpage="true" />
        <div>
            <UpdateContent title={blog?.title || ""} content={blog?.content || ""} id={id || ""}/>
        </div>
        
    </div>
}