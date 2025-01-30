import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export const useBlogs = ()=>{
    type Blogs = {
        title: string,
        content: string,
        id: string
        author: {
            name: string
        }
    }
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blogs[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        }).then(res => {
            console.log(res.data.blogs)
            setBlogs(res.data.blogs),
            setLoading(false)
        })
    }, [])
    return {
        loading, 
        blogs
    }
}

export const useBlog = ({ id }: { id: string}) => {
    type Blog = {
        title: string,
        content: string,
        author:{
            name: string,
            email: string
        } 
    }
    const [blog, setBlog] = useState<Blog>({
        title: "jhb",
        content: "hjgv",
        author: {
                name: "jhb",
                email: "hgvj"
            }
    })
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then(res => {
            setBlog(res.data.blog)
            setLoading(false)
        })
    },[id])
    return {
        blog,
        loading
    }
} 