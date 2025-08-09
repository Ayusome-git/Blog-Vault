import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { useEffect, useState } from "react"

export function BlogInput(){
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    return(
    <div className="grid grid-cols-5">
        <div className="col-start-2 col-span-3 gap-3">
            <Label className="mb-2 text-4xl " htmlFor="message">Title</Label>
            <Textarea onChange={(e)=>setTitle(e.target.value)} className="border-none text-5xl" placeholder="Enter Your Title Here." id="message" />
            <Label className="mt-20 text-4xl mb-2" htmlFor="message">Content</Label>
            <Textarea onChange={(e)=>setContent(e.target.value)} className="h-72" placeholder="Write Your Story Here." id="message" />

        </div>
    </div>
    )
}