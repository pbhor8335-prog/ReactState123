import { useState } from "react"

const Msg=()=>
{
    const[show ,setshow]=useState(false);

    function showwww(){
        setshow(!show);
    }
    return(

        <div style={{textAlign:"center",color:"darkviolet"}}>
            {show && (<h1> Welcome To React! </h1>)}

            <button onClick={showwww}>{show?"Hide":"show"}</button>
        </div>

    )
}

export default Msg;