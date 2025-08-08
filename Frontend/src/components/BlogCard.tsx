
import { Link } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
interface blogprops{
    id:string
    avatar: string
    name:string
    title:string
    content:string
    publishedDate: string
}

export function BlogCard(props:blogprops){
    return(
    <Link to={`/blog/${props.id}`}>
    <div className=" p-4 grid grid-cols-9 border-b cursor-pointer">
    <div className="col-span-7 max-w-3xl text-left"> 
        <div className="flex text-center items-center col-span-7">
        <Avatar className="mr-3 size-10">
        <AvatarImage src={props.avatar} />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar> 
        <div className="font-extralight text-sm opacity-90 col-span-7">{props.name} · {props.publishedDate}</div>
        </div>
        <div className="pt-2 pb-2 text-xl font-semibold">
            {props.title}
        </div>
        <div className="font-light pb-1 col-span-7">
           {props.content.slice(0,100)+"....."}
        </div>
        <div className="text-xs font-extralight">
            {Math.ceil(props.content.length/300)}{" minutes read"}
        </div>
        
    </div>
    <div className="col-span-2">
        <div></div>
    </div>
    
    </div>
    </Link>
        
    )
}