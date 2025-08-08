import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom";

export async function login(email:string,password:string){
    const navigate = useNavigate()
    try{
        const response = await axios.post<any>(`${BACKEND_URL}/user/signin`,{
            email,
            password
        })
        const token = response.data.token;
        localStorage.setItem("token",token);
        alert("you are logged in!!")
        navigate("/blogs");
    }catch(e){
        alert("invalid credentials")
    }


}