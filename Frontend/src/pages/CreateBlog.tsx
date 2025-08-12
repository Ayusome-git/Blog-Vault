import { AppBar } from "../components/Appbar"
import { BlogInputUpdated } from "../components/BlogInputUpdated"



export function CreateBlog(){
    return <div>
        <AppBar createBlogpage="true" />
        <div className="mt-10">
            <BlogInputUpdated/>
        </div>
    </div>
}