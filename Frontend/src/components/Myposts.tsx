import { Link } from "react-router-dom";
import type { Blog } from "../hooks/useUserDetails";


export function Myposts(props:Blog){
    return (<Link to={`/blog/${props.id}`}>
    <div className=" border-t pt-2 m-4 border-b">
        <div className="">
        <div className="w-full text-xl">
            {props.title}
        </div>
        <div className="break-words text-l font-light pb-4">
            {props.content}
        </div>
        <Link to={`/updateBlog/${props.id}`}><div>update</div></Link>
        
    </div>
    </div>
    </Link>)
}