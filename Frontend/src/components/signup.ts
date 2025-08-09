import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { use, useState } from "react";
interface SignupResponse {
    token: string;
}

export async function signup(name:string,email: string, password: string) {
    const [success,setSuccess] = useState(false);
    try{
        const response = await axios.post<SignupResponse>(`${BACKEND_URL}/user/signup`, {
        name,
        email,
        password
    })
    const status=response.status;
    if(status===200) alert("signup successfull")
    const token = response.data.token;
    localStorage.setItem("token",token);
    setSuccess(true);
    return success;
    }catch(e:any){
        const status = e.response.status;
        if(status==409) alert("username already exist");
        else alert("invalid input")
    }
}