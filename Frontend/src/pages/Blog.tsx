import { AppBar } from "../components/Appbar"
import { FullBlog } from "../components/FullBlog"
import { FullBlogSkeleton } from "../components/skeletons/BlogSkeleton"
import { useBlog } from "../hooks/useBlogs"
import { useParams } from "react-router-dom"

export function Blog() {
  const { id } = useParams()
  const { loading, blog } = useBlog({ id: id || "" })

  return (
    <div>
      <AppBar />
      <div className="w-full">
        {loading ? (
          <FullBlogSkeleton />
        ) : blog ? (
          <FullBlog
            id={blog.id}
            name={blog.author.name}
            title={blog.title}
            content={blog.content}
            publishedDate={blog.published
              .slice(0, 10)
              .split("-")
              .reverse()
              .join("-")}
            avatar=""
          />
        ) : (
          <div className="text-center mt-10 text-gray-500">
            Blog not found
          </div>
        )}
      </div>
    </div>
  )
}
