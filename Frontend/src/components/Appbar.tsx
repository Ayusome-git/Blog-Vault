import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./ui/darkmodetoggle";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { WriteBlog } from "./ui/writeBlog";


export function AppBar({createBlogpage}:{createBlogpage?:string}){
    const navigate = useNavigate();

    function logout(){
        localStorage.removeItem("token");
        navigate("/login")
    }

    return <div className="border-b flex justify-between px-5 py-2 items-center mb-4">
        <div className="">
        <div onClick={()=>navigate("/blogs")} className="cursor-pointer">Blog Vault</div>

        </div>
        <div className="flex">
        {!(createBlogpage==="true") && <WriteBlog onclick={()=>navigate("/createblog")}/>}
        <ModeToggle/>
        <DropdownMenu >
            <DropdownMenuTrigger className="cursor-pointer">
                <Avatar className="size-10">
                <AvatarImage src={""} />
                <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={()=>navigate("/me")}>Profile</DropdownMenuItem>
        <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    </div>
    </div>
}