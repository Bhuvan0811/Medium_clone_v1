import { ChangeEvent } from "react"

export const InputBox = ({label , placeHolder, onchange, type} : {
    label: string,
    placeHolder: string
    onchange: (e: ChangeEvent<HTMLInputElement>)=>void
    type?: string
})=>{
    return <div className="flex flex-col justify-center items-center">
        <div className="w-full">
            <div className="flex font-semibold">{label}</div>
            <input className="border p-1.75 rounded-md w-full border-slate-300 focus:outline-blue-300 mt-1 mb-1" type = {type || "text"} placeholder = {placeHolder} onChange={onchange}></input>
        </div>
    </div>
}