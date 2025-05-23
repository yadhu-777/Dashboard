import { useState ,useContext} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


import Generalcontext from "./generalcontext"
export default function Buyactionwindow({uid}){
    const navigate = useNavigate()
    let[price,setPrice]=useState(0)
    let[qty,setQty] =useState(1)
    const {closewindow} = useContext(Generalcontext);

    const buyfunc =()=>{



axios.post("https://zerodhabackend-tszm.onrender.com/neworder",{
    

    name:uid,
    price:price,
    quantity:qty,
    mode:"buy"
},navigate(0));
 
  closewindow();

    }



    const sellfunc =()=>{


axios.post("https://zerodhabackend-tszm.onrender.com/neworder",{

    name:uid,
    price:price,
    quantity:qty,
    mode:"sell"
},navigate(0));
 
  closewindow();

    }




    const cancelfunc=()=>{
       closewindow();
    }



    return(
  
         <div className="msg"  >
 
            <div className="input " >
                <fieldset>
                <input placeholder="quantity" value ={qty} className="qty" onChange={(e)=>{setQty(e.target.value)}}/>
                 <input placeholder="stocks" value ={price} className="stocks" onChange={(e)=>{setPrice(e.target.value)}}/>

                </fieldset>
                <div className="button">
                <div className="txt">
                     <p>margin required $56</p>
                </div>
                    <div className="tradebtn">
                        <button className="btn btn-primary" onClick={buyfunc}>buy</button>
                        <button className="btn btn-primary" onClick={sellfunc}>sell</button>
                    <button className="btn btn-primary" onClick={cancelfunc}>cancel</button>
                    </div>
                </div>
            </div>
        </div>
 
    )
}
