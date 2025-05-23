import { useState,useEffect } from "react";

import axios from "axios";
import { Barchart } from "./barchart";


export default function Holdings(){
    let[holdings,setHoldings] = useState([]);
useEffect(()=>{
    axios.get("https://dashboard-yadhu-777s-projects.vercel.app/allholding").then((res)=>{
        setHoldings(res.data)
        console.log(res.data)
    } )
  
},[])

const labels = holdings.map((stock)=>stock.name)

 const data = {
  labels,
  datasets: [
    {
      label: 'holdings',
      data: holdings.map((stock) =>stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },   
  ],
};





    return(
<>


<h3 style={{margin:"1rem"}}>Holdings({holdings.length})</h3>
    <div className="zz">
<table>
   
<tr>
<th>instrumnets</th>
<th>qty</th>
<th>order</th>
<th>Avg cost</th>
<th>LTP</th>
<th>Cur val</th>
<th>P&L</th>
<th>Net chng</th>
<th>Day chng</th>
</tr>



    {holdings.map((val,idx)=>{



const currval = val.price*val.qty;
const ispft = currval-val.avg*val.qty >=0;
const hs = ispft ? "pftclr" : "lossclr";
const dayclass = val.isLoss ? "lossclr" :"pftclr"
    return(
        <tr >
        <td >{val.name}</td>
        <td>{val.qty}</td>
        <td>{val.avg}</td>
        <td>{val.price}</td>
        <td>{val.net}</td>
        <td>{currval.toFixed(2)}</td>
        <td className={hs} >{(currval - val.avg*val.qty).toFixed(2)}</td>
        <td className={dayclass}>{val.day}</td>
        <td className={hs} >{val.net}</td>
       
        </tr>
    )
})}





</table>

</div>
<Barchart data={data}/>
</>


    )
}
