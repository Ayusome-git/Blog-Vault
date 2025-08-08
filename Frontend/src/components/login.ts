import axios from "axios"
import { BACKEND_URL } from "../config"

export async function login(email:string,password:string){
    
    try{
        const response = await axios.post<any>(`${BACKEND_URL}/user/signin`,{
            email,
            password
        })
        const token = response.data.token;
        localStorage.setItem("token",token);
        alert("you are logged in!!")
    }catch(e){
        alert("invalid credentials")
    }


}