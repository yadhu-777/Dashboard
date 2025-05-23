
import axios from "axios"
import { useEffect, useState, } from "react"
import {  useNavigate } from "react-router-dom";
export default function Vieworder(){
    let[orderVal,setOrderval] =useState([])
    const navigate = useNavigate()
useEffect(()=>{
  

      axios.get("https://dashboard-yadhu-777s-projects.vercel.app/order").then((res)=>{
        setOrderval(res.data)
     }

    )


},[])
    return(

<div className="container">
    <div className="row">
        <div id="ordertable" className="col">
            <table>
<tr>
<th>Name</th>
<th>Qty</th>
<th>Price</th>
<th>Mode</th>
</tr>



{orderVal.map((val,idx)=>{
    
return(

    
<tr>
    <td key={idx}>
       { val.name}
    </td>
    <td  key={idx}>
        {val.quantity}
    </td>
     <td  key={idx}>
        {val.price}
    </td>
     <td  key={idx}>
        {val.mode}
    </td>
</tr>
)


})}


                
            </table>
        </div>
    </div>
</div>

    )
}