import { Link } from "react-router-dom"
interface BlogCardArgs{
    id:string,
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}
export function BlogCard({
    id,
    authorName,
    title, 
    content,
    publishedDate
}: BlogCardArgs){
    return (
    <Link to= {`/blog/${id}`}>
            <div className = "p-1 max-w-xl min-w-md">
            <div className = "flex items-center">
                <Avatar name = {authorName || "Anonymous"}/>
                <div className="font-extralight text-black mr-2 text-sm">{authorName}</div>
                <Dot />
                <div className = "font-thin text-slate-400 text-sm">{publishedDate}</div>
            </div>
            <div className = "font-semibold text-xl font-sans">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="font-thin text-sm py-4">
                {Math.ceil(content.length/100) + " min read"}
            </div>
            <div className="bg-slate-200 w-full h-0.25"></div>
        </div>
    </Link>
    )
}

export function Avatar({ name, size = "small"} :{ name : string, size?: string}){
    return <div className={`relative inline-flex items-center justify-center ${size == "small"? "size-6": "size-8"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-2`}>
    <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
}
export function Dot(){
    return <div className="size-0.75 rounded-full bg-gray-700 mr-2"></div>
}