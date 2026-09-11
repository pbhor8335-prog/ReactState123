import { useState } from "react"

function Color(){

    const[color,setcolor]=useState("white");

 function updatecolor(){
  setcolor("red");
 }

 function changecolor(){
  setcolor("green");
 }

 function change(){
  setcolor("pink")
 }
  return(

  <div style={{backgroundColor:color,width:"100vw",height:"100vh"}}>
    <button onClick={updatecolor}>red</button>
    <button onClick={changecolor}>green</button>
    <button onClick={change}>pink</button>
  </div>
  )

}
export default Color;