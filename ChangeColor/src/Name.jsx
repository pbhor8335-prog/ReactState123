import { useState } from "react"

function Name(){
    const[name,setname]=useState("");

    const[showname,setshowname]=useState("");
    return(

        <div>
           <h2>Enter your name</h2>

           <input type="text" onChange={(e)=> setname(e.target.value)} />

           <h2>Hello ,{name}</h2>

           <button onClick={()=>setshowname(name)}>submit</button>

           <h2>Hello{showname}</h2>
        </div>

    )
}

export default Name;