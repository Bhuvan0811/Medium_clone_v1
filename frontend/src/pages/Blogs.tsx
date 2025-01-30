import { BlogCard } from "../components/BlogCard";
import { Appbar } from '../components/Appbar'
import { useBlogs } from "../hooks";
import { BlogCardSkeleton } from "../components/BlogCardSkeleton";
export default function Blogs() {
    const { blogs, loading } = useBlogs();

    if (loading) return <div>
            <div className="mb-2"><Appbar newOption={true}></Appbar></div>
            <div className="flex justify-center">
                <div className="flex flex-col justify-center">
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                </div>
            </div>  
        </div>
    return (
        <div>
            <div className="mb-2"><Appbar newOption={true}></Appbar></div>
            <div className="flex justify-center">
                <div className="flex flex-col justify-center">
                    {
                        blogs.map(b => <BlogCard id={b.id} authorName={b.author.name} title={b.title} content={b.content} publishedDate="12th Jan 2025" />)
                    }
                </div>
            </div>
        </div>
    )
}