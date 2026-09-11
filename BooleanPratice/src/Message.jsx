import { useState } from "react"

const Message=()=>
{   
    const[show,setshow]=useState(true);

    function handlecilck(){
        setshow(!show);
    }
    return(

        <div style={{textAlign:"center",color:"darkblue"}}>
           {show && ( <h1 > I Am Pratiksha Bhor</h1>
           )}

            <button onClick={handlecilck}>{show?"hide":"show"}</button>
        </div>
    )
}

export default Message;