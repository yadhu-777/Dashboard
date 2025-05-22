import { useState } from "react"
import {Link} from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Navoptions from "./navoption";



export default function Menu(){
let[active,setActive] = useState(0)
let[isprofile,setIsprofile] = useState(0);
const  org = "orgclr"
const nonclr = "nonclr"

let[Click,setClick] = useState(false)

const handleclick=(ind)=>{
    setActive(ind);
}

function clicked(){
    setClick(!Click);
}

    return(
        

<div className="outer">
    <div className="logo">
       <a style={{textDecoration:"none"}} href="/">
 <img style={{width:"3rem"}} src="media/image/logo.png" alt="logo"/>

       </a>
    </div>
    <div className="items">
<div className="inner-items">
    
<Link onClick={()=>handleclick(1)} to={"/"} ><p className={active === 1 ? org :nonclr}>Dashboard</p></Link>
<Link onClick={()=>handleclick(2)}   to={"/order"} ><p className={active === 2 ? org :nonclr}>order</p></Link>
<Link onClick={()=>handleclick(3)}   to={"/holdings"} ><p className={active === 3 ? org :nonclr}>holdings</p></Link>
<Link onClick={()=>handleclick(4)}   to={"/position"} ><p className={active === 4 ? org :nonclr}>positions</p></Link>

</div>
<Link onClick={()=>clicked()}    id="navprf"   ><p className={active === 6 ? org :nonclr}><AccountCircleIcon style={{fontSize:"2.2rem"}}/></p></Link>


    </div>
  {Click && <Navoptions/>}
</div>

    )
}