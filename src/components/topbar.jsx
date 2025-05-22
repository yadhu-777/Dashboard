import Menu from "./menubar"



export default function Topbar(){
    return(


       <div className="outerr">
          <div className="box">
          <div className="first">
            <p >NIFTY 50</p>
            <p>100.2</p>
          </div>
          <div className="second">
              <p>SENSEX</p>
            <p >100.2</p>
          </div>
          </div>
          <Menu/>
       </div>
        
    )
}