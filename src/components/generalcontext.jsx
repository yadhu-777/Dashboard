import React, { useState } from "react";
import Buyactionwindow from "./buyactionwindow";
const Generalcontext = React.createContext({
    openwindow:(uid)=>{},
    closewindow:()=>{},
   
})

 export const GeneralcontextProvider = (props)=>{
    let[isWindowopen,setwindowopen] = useState(false)
let[windowuid, setWindowuid] = useState(0);

const handleopen=(uid)=>{
setwindowopen(true)
setWindowuid(uid)
}
const handleclose=()=>{
setwindowopen(false)
}


    return(


<Generalcontext.Provider
value={
   { openwindow:handleopen,
    closewindow:handleclose}

}>
    {props.children}
   { isWindowopen && <Buyactionwindow uid={windowuid} key={windowuid}/>}
</Generalcontext.Provider>


    )
}
export default Generalcontext