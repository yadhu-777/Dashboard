import axios from "axios";
import { useEffect, useState } from "react";


export default function Position(){

let[positions,setPositions] = useState([])
useEffect(()=>{
  axios.get("https://dashboard-yadhu-777s-projects.vercel.app/allposition").then((res)=>{
    setPositions(res.data);
  },[])
})

    return(
      <div className="positionBox">
        <table>
            <tr>
                <th>product</th>
                <th>name</th>
                <th>qty</th>
                <th>avg</th>
                <th>price</th>
                <th>currval</th>
                <th>PLT</th>
                <th>net</th>
                <th>day</th>
            </tr>
{positions.map((val,idx)=>{

const currval = val.price*val.qty;
const pft = currval - val.avg*val.qty >=0;
const pftclrr = pft ? "pftclr" : "lossclr"
const dayclass = val.isLoss ? "lossclr" : "pftclr"
 return(
    <tr>
    <td>{val.product}</td>
    <td>{val.name}</td>
    <td>{val.qty}</td>
    <td>{val.avg}</td>
    <td>{val.price}</td>
    <td>{currval.toFixed(2)}</td>
        <td className={pftclrr}  >{(currval - val.avg*val.qty).toFixed(2)}</td>
        
        <td  className={pftclrr}  >{val.net}</td>
        <td  className={dayclass}>{val.day}</td>
 </tr>
 )

 

})}


        </table>
      </div>
    )
}

