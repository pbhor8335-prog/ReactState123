import { useState } from "react";

function User(){

    const[show,setshow]=useState(false);
    return(
        <div style={{textAlign:"center",margin:"auto",color:"red", height:"250px", width:"250px" , border:"2px solid black", borderRadius:"20px",marginTop:"100px", padding:"20px",backgroundColor:"lightyellow",boxShadow:"0px 0px 10px black"}}>
            <h1>User component</h1>

            <input type={show?"text":"password"} placeholder="Enter Password" />
            <br /><br />
            <button onClick={()=> setshow(!show)}>{show? "hide":"show"}</button>
        </div>
    )
}

export default User;