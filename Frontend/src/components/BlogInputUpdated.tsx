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

export function BlogInputUpdated() {
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [loading,setLoading] = useState(false);

    async function postblog(){
        if(title==="" || content===""){
            alert("invalid input")
            return;
        }
        try{
        setLoading(true)
        await axios.post(`${BACKEND_URL}/blog`, {
            title,
            content
        },
        {
            headers: {
                authorization: localStorage.getItem("token") || ""
            }
        }
        );
        alert("blog published")
        setLoading(false)
        }catch(e){
            setLoading(false)
        }
    }


    return (
        <div className="grid grid-cols-5">
        <div className="col-start-2 col-span-3 gap-3">
        <div className="text-5xl mb-5 text-center">Create Blog</div>
        <Tabs defaultValue="account">
            <TabsList className="">
            <TabsTrigger value="account">Write</TabsTrigger>
            <TabsTrigger value="password">Upload</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
            <Card className="bg-transparent border-none">
                <CardContent className="grid gap-6">
                <div className="grid gap-3">
                    <Label className="text-3xl" htmlFor="tabs-demo-name"></Label>
                    <Textarea className="border-none text-2xl md:text-3xl" onChange={(e)=>setTitle(e.target.value)}  placeholder="Enter Your Title Here." defaultValue={title} />
                </div>
                <div className="grid gap-3">
                    <Label className="text-3xl" htmlFor="tabs-demo-username"></Label>
                    <Textarea onChange={(e)=>setContent(e.target.value)}  placeholder="Write Your Story Here." defaultValue={content} />
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
                    <Input className="w-9/12 h-54 cursor-pointer" id="tabs-demo-current" type="file" />
                </div>
                </CardContent>
                <div className="flex items-center justify-center">
                <Button onClick={postblog}>{loading ? (
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
