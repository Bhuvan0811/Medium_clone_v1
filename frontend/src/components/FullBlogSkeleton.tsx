import { Avatar } from "./BlogCard"
export function FullBlogSkeleton(){
    return <div role = "status" className = "animate-pulse">
        <div className="flex justify-center pt-10"> 
                        <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl">
                            <div className ="col-span-8">
                                <div className = " font-extrabold">
                                    <div className = "bg-gray-200 h-20 rounded-full mt-5"></div>
                                </div>
                                <div className= "text-slate-500 pt-6">
                                    <div className = "bg-gray-200 h-4 w-50"></div>
                                </div>
                                <div className = "pt-9">
                                    <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                                    <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                                    <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                                    <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                                    <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                                    <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                                    <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                                    <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                                    <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                                    <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                                    <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                                    <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                                    <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                                    <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                                    <div className="h-4 bg-gray-200 rounded-full "></div>
                                </div>
                            </div> 
                            <div className = "col-span-1"></div>
                            <div className = "col-span-3">
                                <div className="pt-10">
                                    <div className="text-slate-700">
                                        <div className = "w-30 h-5 bg-gray-300"></div>
                                    </div>
                                    <div className="flex mt-1.5">
                                        <div className="flex flex-col justify-center mr-1">
                                            <Avatar name = {""} size = "large"/>
                                        </div>
                                        <div>
                                            <div className="font-bold text-xl mb-1">
                                                <div className="w-30 h-5 rounded-full bg-gray-200"></div>
                                            </div>
                                            <div className ="text-slate-500">
                                                <div className = "w-60 bg-gray-300 h-3 mt-3"></div>
                                                <div className = "w-60 bg-gray-300 h-3 mt-3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
}