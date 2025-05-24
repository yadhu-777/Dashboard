import Wishlist from "./wishlist"
import {Routes,Route} from "react-router-dom"
import Position from "./position"
import Summary from "./summary"
import Holdings from "./holdings"
import { useState ,useContext} from "react";
import Vieworder from "./order"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { ToastContainer } from "react-toastify";
import { GeneralcontextProvider } from "./generalcontext"
import { Userdetails } from "./Usercontext";


import axios from "axios"
export default function Dashboard(){

const {setUser} = useContext(Userdetails);
    const navigate = useNavigate();
const [username,setUsername] = useState();
  const [cookies, removeCookie] = useCookies([]);
useEffect(()=>{

   async function check(){
        
const {data} = await axios.post(
  "https://zerodhabackend-tszm.onrender.com/verify",
  {},
  { withCredentials: true }
 
); 
const {status,user,email} = data;
  
setUsername(user)
setUser({
    user:user,
    email:email
});
if(status){
 console.log("dashboard");
    toast(`hello ${user}`,{
        position:"top-right"
    })
    

}
else{
   console.log("removed")
    removeCookie("token");
    navigate("/Siignup")
}
    }


check();

},[cookies, removeCookie]);



    return(
<div className="outmost">
    
<div className="dashboard">
    <GeneralcontextProvider>
        <Wishlist/>
        </GeneralcontextProvider>


<div className="content">


<Routes>

    <Route path="/" element={<Summary/>}  />
    <Route path="/position" element={<Position/>}  />
        <Route path="/order" element={<Vieworder/>}  />
    <Route path="/holdings" element={<Holdings/>}  />

</Routes>



</div>

<ToastContainer/>
</div>

</div>

        
    )
}