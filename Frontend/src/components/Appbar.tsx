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


export function AppBar(){
    const navigate = useNavigate();
    return <div className="border-b flex justify-between px-5 py-2 items-center mb-4">
        <div onClick={()=>navigate("/blogs")} className="cursor-pointer">Blog Vault</div>
        <div className="flex">
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
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem onClick={()=>navigate("/blogs")}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    </div>
    </div>
}