import { AppBar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks/useBlogs"




export function Blogs(){
    const{ loading , blogs } = useBlogs();
    if(loading){
        return <div>loading</div>
    }
    return <div>
        <AppBar/>
    <div className="flex justify-center">
    <div>
        {blogs.map(blog=> 
            <BlogCard
            id={blog.id}
            name={blog.author.name}
            title={blog.title}
            content={blog.content}
            publishedDate={blog.published.slice(0,10).split('-').reverse().join('-')}
            avatar={""}/>
            
        )}
    </div>
    </div>
    </div>
}