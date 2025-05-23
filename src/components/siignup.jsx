import { useState } from "react"
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import '../App.css';


export default function Siignup(){


      const navigate = useNavigate();
let [inputval,setInputval] = useState({
    name:"",
    email:"",
    password:""
});

function userval(e){
    const {name,value} = e.target;
   setInputval({
    ...inputval,
    [name]: value
   })
}
function successHandle(msg){
   
    toast.success(msg, {
      position: "top-right",
     
})



}
 const handleError = (err) =>{
    toast.error(err, {
      position: "bottom-left",
    })};




async function Submithandle(e){
e.preventDefault();
try{
    const{data} = await axios.post("https://zerodhabackend-tszm.onrender.com/signup",{
    ...inputval
},{
    withCredentials:true
})



const {message,success} = data;

if(success){
    successHandle(message);
    

        navigate("/")
   
}
else{
    handleError(message);
}
}
catch(err){
console.log(err)
}

setInputval(
    {
        name:"",
        email:"",
        password:""
    }
)

}


    
    return(
        <div   className="containerr">
             <img style={{width:"8%"}} src="media/image/logo.png"/>
             <div id="outt"  className="row">

               
               
                 <div  id="out" className="col  ">
                    <h2>
                        Signup now
                    </h2>
                    <p>Or track your existing application</p>
                   <form id="outerdiv"  onSubmit={Submithandle} >

                     <input onChange={userval} name="name"  value={inputval.name}  placeholder="Enter your name"/>
                      <input  onChange={userval} name="email"  value={inputval.email}  placeholder="Enter your email" />
                        <input onChange={userval} name="password"  value={inputval.password}   placeholder="Enter your password" />
                        <button type="submit" style={{width:"30%",marginTop:"1rem"}} className="btn btn-primary">Signup</button>
                   </form>                
                     <ToastContainer />
                </div>
            </div>
        </div>
    )

}
