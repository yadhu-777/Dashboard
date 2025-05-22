import { watchlist } from "../data/data"
import {Tooltip,Grow} from "@mui/material";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp ,MoreHoriz} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import  { useState,useContext ,useRef} from "react";
import Generalcontext from "./generalcontext";

import { Doughnutchart } from "./doughnutchart";
export default function Wishlist(){
const navigate = useNavigate();
const labels =watchlist.map((val)=>val.name);


 const data = {
  labels:labels,
  datasets: [
    {
      label: 'Holwdings',
      data: watchlist.map((val)=>val.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
const pieRef = useRef(null); 

function piescroll(){
pieRef.current?.scrollIntoView({behavior:"smooth"});

setTimeout(()=>{
  navigate(0)
},5000)

}


    return(
<div   className="wish-container">
<div className="input">
    <input id="inputt" placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"/>
    <span className="count">{watchlist.length}/55</span>

</div>





    
    <ul className="outerlist">
    {watchlist.map((stocks,idx)=>(
      <WatchList key={idx} stocks ={stocks}  pie={piescroll}/>
    ))}
    </ul>
  <div id="piechartt" ref={pieRef} className="div">
      <Doughnutchart data={data}/>
  </div>
    </div>

)

}


 function WatchList({stocks,pie}){
let[showoptions,setShowoptions] = useState(false);

const onMousein =(e)=>{
  setShowoptions(true)
}
const onMouseout =(e)=>{
  setShowoptions(false)
}




return(
<>

<li onMouseEnter={onMousein} onMouseLeave={onMouseout} className="listitems">
<div className="items">
  <span>
    <p className={stocks.isDown ? "lossclr" : "pftclr"}>{stocks.name}</p>
    </span>  
   <div className="left-side">


    
  <span>
 <p className={stocks.isDown ? "lossclr":"pftclr"}> {stocks.percent}</p>
  </span>
  <span>
  <p>{stocks.isDown ? (<KeyboardArrowDown   className="lossclr"/>): (<KeyboardArrowUp  className="pftclr"/> )}</p>
  </span>
 <span>
     <p>{stocks.price}</p> 
  </span>
   </div>
   {showoptions && <Watchaction  uid={stocks.name} piee={pie} />}
</div>

</li>


</>

   
)
}

const Watchaction =({uid,piee})=>{


    const {openwindow} = useContext(Generalcontext);
    const openwindowfunc=()=>{
      openwindow(uid)
    }
  return(
    <span className="options">
      <span>
      <Tooltip title='buy' placement="top" arrow TransitionComponent={Grow}>
        <button onClick={openwindowfunc} >
          Trade
        </button>
        </Tooltip>
      </span>
      
      <span>
      <Tooltip title='analysis' placement="top" arrow TransitionComponent={Grow}>
        <button onClick={piee}>
        <BarChartOutlined/>
        </button>
        </Tooltip>
      </span>
      <span>
      <Tooltip title='more' placement="top" arrow TransitionComponent={Grow}>
      <button ><MoreHoriz/></button>
        </Tooltip>
      </span>
    </span>
  )
}