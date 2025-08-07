import { cn } from "../lib/utils"
import { Button } from "./ui/button"
import { Loader2Icon } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { signup } from "./signup"

interface formProps{
  variant: "login" | "signup",
}
export function LoginForm(props:formProps) {
  const [loading,setLoading] = useState(false);
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const navigate = useNavigate();
  
  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card className="cursor-default">
        <CardHeader>
          {(props.variant==="login") ?
            <>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </>
            :
            <>
              <CardTitle>Create a new account</CardTitle>
              <CardDescription>
                Enter your email below to create your account
              </CardDescription>
            </>
          }
        </CardHeader>
        <CardContent>
          <div>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="abc@example.com"
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>

                </div>
                <Input id="password" type="password" onChange={e =>setPassword(e.target.value)} required />
              </div>
              <div className="flex flex-col gap-3">
                {(props.variant === "login") ? (
                  <Button onClick={async () => {
                    setLoading(true);
                    try {
                      await signup(email, password);
                    } finally {
                      setLoading(false);
                    }
                  }} className="w-full">
                    {loading ? (
                      <>
                        <Loader2Icon className="animate-spin mr-2" />
                      </>
                    ) : 
                      "Login"
                    }
                  </Button>
                ) : <Button
                  onClick={async () => {
                    setLoading(true);
                    try {
                      await signup(email, password);
                    } finally {
                      setLoading(false);
                    }
                  }}
                  className="w-full items-center"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2Icon className="animate-spin mr-2" />
                    </>
                  ) : 
                    "Signup"
                  }
                </Button>}
                
              </div>
            </div>
            <div className="mt-4 text-center text-sm flex items-center justify-center">
              Don&apos;t have an account?{" "}
              {
                (props.variant=="login")?
                <>
                  <p onClick={()=>{navigate("/signup")}} className="underline underline-offset-4 pl-1 cursor-pointer">
                    Sign up
                  </p>
                </> :
                <>
                  <p onClick={()=>{navigate("/login")}}className="underline underline-offset-4 pl-1 cursor-pointer">
                    Login
                  </p>
                </>
              }
              
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
