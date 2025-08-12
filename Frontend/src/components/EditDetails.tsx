import axios from "axios"
import { useUserDetails, type UserDetails } from "../hooks/useUserDetails"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { Loader2Icon } from "lucide-react"

interface editProps{
  name: string;
  email: string;
  onclick:()=>void
}

export function EditButton(props:editProps) {
    const [name,setName] = useState<string>("");
    const [loading,setLoading] = useState(false);

   async function Update(){
    props.onclick();
    try{
      setLoading(true);
      const response = await axios.put<string>(`${BACKEND_URL}/user/me`,
        {name:name},
        {
        headers:{
          authorization:localStorage.getItem("token")
        }
      })
      
      setName(response.data)
      alert("username updated successfully")
      setLoading(false)
    }catch(e){
      setLoading(false)
    }

   }


  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">Edit Profile</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            <Input onChange={(e)=> setName(e.target.value)} id="sheet-demo-name" defaultValue={props.name} />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Email</Label>
            <Input disabled id="sheet-demo-username" defaultValue={props.email} />
          </div>
        </div>
        <SheetFooter>
          <Button onClick={Update} type="submit">{loading ? (
                      <>
                        <Loader2Icon className="animate-spin mr-2" />
                      </>
                    ) : 
                      "Save Changes"
                    }</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
