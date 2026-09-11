import Follow from "./Follow";
import Like from "./Likes";

function App(){
  return(
    <div style={{width:"400px",height:"300px",border:"2px solid black",boxShadow:"0px 0px 10px auto",margin:"auto",marginTop:"30px",backgroundColor:"lightyellow"}}>
      <Like/>
      <Follow/>
    </div>

  )
}

export default App;
