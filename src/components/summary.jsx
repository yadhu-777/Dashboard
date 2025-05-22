import { Userdetails } from './Usercontext';
import {  useContext} from "react";


export default function Summary(){
    const {user} = useContext(Userdetails);
     return(
         <div className="container">
        <div id='borderb' className="row">
            <div id='summary' className="col">
     <p> <span>Hi!</span> {user.user}</p>
            </div>
        </div>

<div className="row">
    <div id='summary' className="col">
        <h4>Available Margin</h4>
        <p style={{marginTop:"2rem",color:"#85BB65"}}>₹23,000</p>
    </div>
</div>

      </div>
    )
     
}