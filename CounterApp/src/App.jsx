import { useState } from "react"
import User from "./User";
import ChangeColor from "./Color";

function App(){
  const[count,setCount]=useState(0);

  function Incresecount(){
    setCount(count+1);
  }

  function decrasecount(){
    setCount(count-1);
  }

  function reset(){
    setCount(0);
  }

  return(

    <div style={{width:"450px",height:"300px",color:"red",background:"lightgreen",margin:"auto",marginTop:"20px",padding:"10px",textAlign:"center",border:"3px solid black",boxShadow:"0px 0px 30px auto"}>
      <h1>CounterApp</h1>
      <h2>{count}</h2>

      <button onClick={Incresecount}>increse</button>
      <button onClick={decrasecount}>decrase</button>
      <button onClick={reset}>reset</button>

      <User/>

     

    </div>

    

  )
}

export default App;