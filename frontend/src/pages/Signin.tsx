import { Quote } from "../components/Quote";
import { Auth } from "../components/Auth";
export default function Signin(){
    return <div className = "grid grid-cols-1 lg:grid-cols-2">
        <Auth type = {"Signin"}/>
        <div className = "hidden lg:block">
            <Quote/>     
        </div>   
    </div>
}