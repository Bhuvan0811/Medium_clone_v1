import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";
import { Avatar } from "./BlogCard";
import { FullBlogSkeleton } from "./FullBlogSkeleton";
export const FullBlog = ()=>{
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id: id||""
    });

    if(loading) return<div><FullBlogSkeleton /></div>
    return ( 
            <div className="flex justify-center pt-10"> 
                <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl">
                    <div className ="col-span-8">
                        <div className = "text-5xl font-extrabold">{blog.title}</div>
                        <div className= "text-slate-500 pt-6">Published on 10th Jan 2025</div>
                        <div className = "pt-9">{blog.content}</div>
                    </div> 
                    <div className = "col-span-1"></div>
                    <div className = "col-span-3">
                        <div className="pt-10">
                            <div className="text-slate-700">Author</div>
                            <div className="flex mt-1.5">
                                <div className="flex flex-col justify-center mr-1">
                                    <Avatar name = {blog.author.name || "Anonymous"} size = "large"/>
                                </div>
                                <div>
                                    <div className="font-bold text-xl pb-1">
                                        {blog.author.name || "Anonymous"}
                                    </div>
                                    <div className ="text-slate-500">
                                        Random catch phrase that looks nice about the aithor
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}