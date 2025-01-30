import { Avatar } from './BlogCard'
import { Link } from 'react-router-dom'

export function Appbar({ newOption = false }: { newOption?: boolean }) {
    return <div className="flex justify-between border-b border-slate-300 px-2 py-3">
        <Link to="/blogs">
            <div className='flex flex-col justify-center ml-3 h-full'>
                <div className=" font-normal cursor-pointer py-2">MEDIUM</div>
            </div>
        </Link>

        <div className='flex justify-center items-center'>
            {
                newOption == true ?
                        <div className='mr-5'>
                            <Link to="/publish">
                                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5  text-center">New</button>
                            </Link>
                        </div>
                    : null
            }
            <Avatar name="Bhuvan Kaushal" size="large"></Avatar>
        </div>

    </div>
}