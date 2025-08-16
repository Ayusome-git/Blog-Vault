
import axios from "axios";
import { BACKEND_URL } from "../config";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Trash } from "lucide-react";



interface DeleteBlogButtonProps {
    id: string;
    onclick: () => void;
}

export function DeleteBlogButton(props: DeleteBlogButtonProps){

     async function deleteBlog() {
        try {
            console.log("Deleting blog with id:", props.id); 
            const token = localStorage.getItem("token");
            await axios.delete(`${BACKEND_URL}/blog/${props.id}`, {
                headers:{
                    authorization:token
                }
            });
            props.onclick();
            alert("blog deleted")
        } catch (e) {
            console.error("Failed to delete blog:", e);
            alert("Failed to delete blog. Please try again.");
        }
    }
    return(
        <AlertDialog>
        <AlertDialogTrigger className="cursor-pointer"><Tooltip>
                        <TooltipTrigger>
                            <Trash className="size-5 cursor-pointer stroke-red-400"/>
                        </TooltipTrigger>
                        <TooltipContent>Delete Blog</TooltipContent>
                        </Tooltip></AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your blog
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                 <AlertDialogAction onClick={deleteBlog}>Continue</AlertDialogAction>
             </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog>
    )
}