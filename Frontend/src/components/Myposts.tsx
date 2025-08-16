import { Link } from "react-router-dom";

import { DeleteBlogButton } from "./DeleteBlog";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { FilePenLine } from "lucide-react";

export interface Blog {
    id: string;
    title: string;
    content: string;
    onclick: ()=>void
}

export function Myposts(props:Blog){
    return (
        <div className=" border-t pt-2 mt-4 border-b">
            <div className="">
                <Link to={`/blog/${props.id}`}>
                    <div className="w-full text-xl">
                        {props.title}
                    </div>
                    <div className="break-words text-l font-light pb-4">
                        {props.content}
                    </div>
                </Link>
                <div className="flex justify-between">
                    <Link to={`/updateBlog/${props.id}`}><div>
                    <Tooltip>
                        <TooltipTrigger>
                            <FilePenLine className="size-5 cursor-pointer"/>
                        </TooltipTrigger>
                        <TooltipContent>Edit Blog</TooltipContent>
                        </Tooltip>    
                        </div></Link>
                    <DeleteBlogButton id={props.id} onclick={props.onclick} />
                </div>
            </div>
        </div>
    )
}