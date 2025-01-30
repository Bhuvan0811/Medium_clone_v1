import { useState } from "react"
import { InputBox } from "./InputBox"
import { SignupInput } from "@tank_08/medium-commons"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const Auth = ({type} :{type :"Signup" | "Signin"})=>{
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        email: "",
        password: "",
        name: ""
    })
    async function sendRequest(){
        try{
           const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type == "Signup" ? "signup": "signin"}`, postInputs)
           const jwt = response.data.token;
           localStorage.setItem('token', "Bearer " + jwt);
            navigate("/blogs")
        } catch(e){
            alert(type == "Signup" ? "Error while Signing up": "Error while signing in")
        }
    }
    return (
    <div className= "h-screen flex flex-col justify-center">
        <div className="flex justify-center">
            <div className="">
                <div className="flex justify-center px-10">
                    <div >
                        <div className="font-extrabold text-3xl">{type == "Signin"? "Login To Your Account": "create an account"}</div>
                        <div className="text-lg text-slate-500 pt-2">
                        {type == "Signup" ? "Already Have an account? " : "Don't have an account? "} 
                        <Link to ={type == "Signup" ? "/signin" : "/signup"} className="underline">
                        {type == "Signup" ? "Login" : "Signup"}
                        </Link></div>
                    </div>
                </div>
                <div className="mt-6">
                    <InputBox label = {"Username"} placeHolder={"bhuvankaushal08@gmail.com"} onchange={(e) =>{
                        setPostInputs(postInputs => ({
                            ...postInputs,
                            email: e.target.value
                        }))
                    }}/>
                    <InputBox label = {"Password"} type = {"Password"} placeHolder={"123456"} onchange={(e) =>{
                        setPostInputs(postInputs => ({
                            ...postInputs,
                            password: e.target.value
                        }))
                    }}/>
                    {type == "Signup" ? <InputBox label = {"First Name"} placeHolder={"Bhuvan"} onchange={(e) =>{
                        setPostInputs(postInputs => ({
                            ...postInputs,
                            name: e.target.value
                        }))
                    }} />: null}
                </div>
                <div className="flex justify-center mt-3">
                    <button type="button" onClick ={sendRequest} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full">{type == "Signin"? "Sign in": "Sign up"}</button>
                </div>
            </div>
        </div>
    </div>
)}