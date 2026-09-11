import { useState } from "react"

function Like() {
    const [like, setlike] = useState(false);
    return (
        <div style={{textAlign:"center",color:"darkblue"}}>
        { like && (
            <div>
                <h1>You Liked this post</h1>
            </div>

        )}

        <button onClick={()=>setlike(!like)}>{like ? " ❤️Liked":"🤍 Like"}</button>

        </div>
    )
}

export default Like;