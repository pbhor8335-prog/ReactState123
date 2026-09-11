import { useState } from "react"

function Follow() {
    const [follow, setfollow] = useState(false);
    return (

        <div style={{textAlign:"center",color:"deeppink"}}>

            {follow && (
                <div>
                    <h1>You are  Following Pratiksha </h1>
                </div>
            )}

            <button onClick={() => setfollow(!follow)}>{follow ? "✅ Following" : "➕ Follow"}</button>
        </div>


    )
}

export default Follow;