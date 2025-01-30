import { Avatar, Dot } from "./BlogCard"
export function BlogCardSkeleton(){
    return <div  role="status" className="animate-pulse">
        <div className = "p-1 w-xl">
            <div className = "flex items-center">
                <Avatar name = {""}/>
                <div className="font-extralight text-black mr-2 text-sm">
                    <div className="w-20 h-3 rounded-full bg-gray-200"></div>
                </div>
                <Dot />
                <div className = "font-thin text-slate-400 text-sm">
                    <div className="w-20 h-3 rounded-full bg-gray-200"></div>
                </div>
            </div>
            <div className = "font-semibold text-xl font-sans mt-2">
                <div className = "w-md h-10 rounded-lg bg-gray-200"></div>
            </div>
            <div className="text-md font-thin mt-2 py-2">
                <div className = "w-full rounded-full h-5 bg-gray-200"></div>
                <div className = "w-full rounded-full h-5 bg-gray-200 mt-2"></div>
            </div>
            <div className="font-thin text-sm py-4">
                <div className = "h-3 w-20 rounded-full bg-gray-200"></div>
            </div>
            <div className="bg-slate-200 w-full h-0.25 bg-gray-200"></div>
        </div>
    </div>
}