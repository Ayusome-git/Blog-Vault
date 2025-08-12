import type { Blogs } from "../hooks/useBlogs"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

interface blogprops{
    id:string
    avatar: string
    name:string
    title:string
    content:string
    publishedDate: string
}

export function FullBlog(props:blogprops){
    return <div>
    <div className="grid grid-cols-5">
        <div className="col-start-2 col-span-3">
            <div className="text-4xl font-bold">{props.title}</div>
            <div className="pt-4 mb-2 flex items-center">
                <div>
                    <Avatar className="mr-3 size-10">
                    <AvatarImage src={props.avatar} />
                    <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div>{props.name}</div>
            </div>
            <div className="border-t flex justify-between font-extralight opacity-90 ">
                    <div>{`${Math.ceil(props.content.length/300)} Minute(s) read`}</div>
                    <div>{props.publishedDate}</div>
                </div>
            <div className="text-xl pt-4 leading-loose tracking-wide border-t">
                {props.content}
            </div>
        </div>
    </div>
    </div>
}