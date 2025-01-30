import { useState } from "react"
import { Appbar } from "../components/Appbar"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { CreateBlogInput } from "@tank_08/medium-commons"
import { useNavigate } from "react-router-dom"

export const Publish = ()=>{
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate();
    async function publishBlog(){
        const createBlog: CreateBlogInput = {
            title,
            content
        } 
        const data = await axios.post(`${BACKEND_URL}/api/v1/blog`, createBlog, {
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        navigate(`/blog/${data.data.postId}`)
    }

    return <div>
        <Appbar></Appbar>
        <TextEditor setTitle = {setTitle} setContent={setContent}/>
        <div className="mt-4 flex justify-center">
            <div className="w-6xl">
                <button onClick = {publishBlog} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">Publish Blog</button>
            </div>
        </div>
    </div>
}

function TextEditor({setTitle, setContent}:{ 
    setTitle: (e:string)=>void
    setContent: (e:string)=>void
}
){
    return <>
        <div className="flex justify-center mt-4">
            <textarea onChange = {(e)=> setTitle(e.target.value)} className="w-6xl text-3xl p-2.5 h-15 border-l-2 border-slate-400 focus:outline-none focus:border-blue-600" placeholder="Title"></textarea>
        </div>
        <div className= "flex justify-center mt-4">
            <textarea onChange = {(e)=> setContent(e.target.value)} className ="w-6xl h-50 p-2.5 border border-slate-200 rounded-lg focus:outline-blue-300"placeholder="Write your blog here..."></textarea>
        </div>
    </>
}