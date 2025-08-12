import { Edit } from "lucide-react"
import { AppBar } from "../components/Appbar"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { EditButton } from "../components/EditDetails"
import { useUserDetails } from "../hooks/useUserDetails"
import { useEffect, useState } from "react"
import { Myposts } from "../components/Myposts"



export function Profile(){
    const {loading, blog, userDetail,refresh} = useUserDetails()
    const[open,setOpen] =useState(false);

    useEffect(()=>{
        refresh();
    },[open])
    
    
    if(!userDetail){
        return <div>no user</div>
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
                <div className="text-2xl ml-3">{userDetail?.name}</div>
                <EditButton onclick={()=>{setOpen(!open)}} email={userDetail.email } name={userDetail.name}/>
                </div>
                <div>My Posts</div>
                <div>
                    {blog.map((b) => (
                        <Myposts
                        key={b.id}
                        id={b.id}
                        title={b.title}
                        content={b.content.slice(0,100)+"......"}
                        />
                    ))}
                </div>
            </div>
            </div>
        </div>
    )
}