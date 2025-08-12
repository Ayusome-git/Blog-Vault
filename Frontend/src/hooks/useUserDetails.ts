import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface Blog {
    id: string;
    title: string;
    content: string;
}

export interface UserDetails {
    name: string;
    email: string;
    posts: Blog[];
}

export const useUserDetails = () => {
    const [userDetail, setUserDetail] = useState<UserDetails>();
    const [blog, setBlog] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    async function refresh(){
        try {
            setLoading(true);
            const token = localStorage.getItem("token");
            if (!token) {
                console.warn("No token found in localStorage");
                setLoading(false);
                return;
            }
            const response = await axios.get<UserDetails>(`${BACKEND_URL}/user/me`, {
                headers: { authorization: token }
            });
            setUserDetail(response.data);
            setBlog(response.data.posts);
            setLoading(false)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }


    return { userDetail, blog, loading, refresh };
};
