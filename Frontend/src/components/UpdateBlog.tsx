import axios from "axios"
import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs"
import { Textarea } from "./ui/textarea"
import { useState } from "react"
import { BACKEND_URL } from "../config"
import { Loader2Icon } from "lucide-react"

interface blog{
    id:string
    title:string 
    content: string
}

export function UpdateContent(props:blog) {
    const [title,setTitle] = useState(props.title);
    const [content,setContent] = useState(props.content);
    const [loading,setLoading] = useState(false);
    const[id,setId] =useState(props.id)

    async function update(){
        if(title==="" || content===""){
            alert("invalid input")
            return;
        }
        try{
            setLoading(true);
            await axios.put(`${BACKEND_URL}/blog`,{
                id:id,
                title:title,
                content:content
            },{
                headers:{
                    authorization:localStorage.getItem("token")
                }
            })
            setLoading(false)
        }catch(e){
            setLoading(false)
        }
    }


    return (
        <div className="grid grid-cols-5">
        <div className="col-start-2 col-span-3 gap-3">
        <div className="text-5xl mb-5 text-center">Update Blog</div>
        <Tabs defaultValue="account">
            <TabsList className="">
            <TabsTrigger value="account">Write</TabsTrigger>
            <TabsTrigger value="password">Upload</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
            <Card>
                <CardContent className="grid gap-6">
                <div className="grid gap-3">
                    <Label className="text-3xl" htmlFor="tabs-demo-name">Title</Label>
                    <Textarea onChange={(e)=>setTitle(e.target.value)}  placeholder="Enter Your Title Here." value={title} />
                </div>
                <div className="grid gap-3">
                    <Label className="text-3xl" htmlFor="tabs-demo-username">Content</Label>
                    <Textarea onChange={(e)=>setContent(e.target.value)}  placeholder="Write Your Story Here." value={content} />
                </div>
                </CardContent>
                
            </Card>
            </TabsContent>
            <TabsContent value="password">
            <Card className="flex">
                <CardHeader>
                <CardTitle className="text-center text-3xl">Upload Image</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                <div className="gap-3 flex justify-center items-center ">
                    <Input className="w-72 h-54 cursor-pointer" id="tabs-demo-current" type="file" />
                </div>
                </CardContent>
                <div className="flex items-center justify-center">
                <Button onClick={update}>{loading ? (
                      <>
                        <Loader2Icon className="animate-spin mr-2" />
                      </>
                    ) : 
                      "Publish"
                    }</Button>
                </div>
            </Card>
            </TabsContent>
        </Tabs>
        </div>
        </div>
    )
}
