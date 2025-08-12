import { AppBar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeletonList } from "../components/skeletons/BlogsSkeleton";
import { useBlogs } from "../hooks/useBlogs"

export function Blogs(){
    const{ loading , blogs } = useBlogs();
    return <div>
        <AppBar/>
    <div className="flex justify-center">
        <div className="w-full max-w-4xl">
    {loading && <BlogSkeletonList/>}
    <div>
        {[...blogs].sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
        .map(blog => (
        <BlogCard
            key={blog.id} 
            id={blog.id}
            name={blog.author.name}
            title={blog.title}
            content={blog.content}
            publishedDate={blog.published.slice(0, 10).split('-').reverse().join('-')}
            avatar=""
        />
))}
    </div>
    </div>
    </div>
    </div>
}