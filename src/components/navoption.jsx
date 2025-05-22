
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useContext  } from "react";
import { useNavigate } from 'react-router-dom';
import { Userdetails } from './Usercontext';
import { useCookies } from 'react-cookie';
export default function Navoptions(){
const {user} = useContext(Userdetails);
     const navigate = useNavigate();
       const [cookies, removeCookie] = useCookies([]);
 function Logout(){
removeCookie()
navigate("/Siignup")

}


    return(

<div  className="outer2">
    <div className="inerroption">
        <AccountCircleIcon style={{fontSize:"3.5rem"}}/>
         <p>{user.user}</p>
         <p style={{fontSize:"1rem"}}>{user.email}</p>
    </div>
    <div className="logout">
        <button onClick={Logout}  className='btn btn-danger'>Logout</button>
    </div>
</div>

    )
}