
import  { createContext, useState } from "react";
export const Userdetails = createContext();

export  function UsercontextProvider({children}){

    let[user,setUser] = useState({
        user:"",email:""
    });


    return(
        <Userdetails.Provider value={{user,setUser}}>
            {children}
        </Userdetails.Provider>
    
    )
}