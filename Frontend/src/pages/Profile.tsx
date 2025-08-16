
import { AppBar } from "../components/Appbar"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { EditButton } from "../components/EditDetails"
import { useUserDetails } from "../hooks/useUserDetails"
import { useEffect, useState } from "react"
import { Myposts } from "../components/Myposts"
import { FullBlogSkeleton } from "../components/skeletons/BlogSkeleton"
import { useNavigate } from "react-router-dom"
import { SquarePen } from "lucide-react"

export function Profile(){
    const {loading, blog, userDetail,refresh} = useUserDetails()
    const[open,setOpen] =useState(false);
    const[deleteBlog,setDeleteBlog] =useState(false);
    const nav=useNavigate()
    useEffect(()=>{
        refresh();
    },[open,deleteBlog])
    
   if(loading){
    return(<div>
        <AppBar/>
        <div><FullBlogSkeleton/></div>
         </div>
    )
   }
    return (
        <div>
            <AppBar/>
            <div className="grid grid-cols-5">
            <div className="col-start-2 col-span-3 mt-10">
                <div className="flex items-center">
                <Avatar className="size-10">
                <AvatarImage src={""} />
                <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-2xl ml-3 mr-3">{userDetail?.name}</div>
                <EditButton
                    onclick={() => { setOpen(!open) }}
                    email={userDetail?.email ?? ""}
                    name={userDetail?.name ?? ""}
                />
                </div>
                <div className="mt-5 text-xl">My Blogs</div>
                <div>
                    {blog.length === 0 ? (
                        <div className="mt-5 border border-dotted p-10 cursor-pointer flex justify-center items-center flex-col md:flex-row" onClick={()=>nav("/createblog")} >It looks empty here. Start your blogging journey by creating your first blog post now <SquarePen className="ml-3 size-4 "/></div>
                    ) : (
                        blog.map((b) => (
                            <Myposts
                                key={b.id}
                                id={b.id}
                                title={b.title}
                                content={b.content.slice(0, 100) + "......"}
                                onclick={() => setDeleteBlog(!deleteBlog)}
                            />
                        ))
                    )}
                </div>
            </div>
            </div>
        </div>
    )
}