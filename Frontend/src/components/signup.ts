import axios from "axios";
import { BACKEND_URL } from "../config";
interface SignupResponse {
    token: string;
}

export async function signup(email: string, password: string) {

    try{
        const response = await axios.post<SignupResponse>(`${BACKEND_URL}/user/signup`, {
        email,
        password
    })
    const status=response.status;
    if(status===200) alert("signup successfull")
    const token = response.data.token;
    localStorage.setItem("token",token);
    }catch(e:any){
        const status = e.response.status;
        if(status==409) alert("username already exist");
        else alert("invalid input")
    }
}