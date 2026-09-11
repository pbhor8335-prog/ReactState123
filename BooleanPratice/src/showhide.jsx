import { useState } from "react"

function Sh(){

    const[show,setshow]=useState(false);
    return(
        <div style={{textAlign:"center", width:"200px",height:"200px",border:"2px solid black",boxShadow:"0px 0px 10px black",color:"black",backgroundColor:"lightgreen",margin:"auto",marginTop:"40px"}}>
            <h1>Hello Everyone</h1>
            <input type={show?"text":"password"} placeholder="Enter password" />
            <br />
            <br />
            <button onClick={()=> setshow(!show)}>
                {show?"hide":"show"}
            </button>
        </div>
    )
}

export default Sh;