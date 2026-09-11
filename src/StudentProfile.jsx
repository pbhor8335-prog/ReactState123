import { useState } from "react"
import pratiksha from "./assets/pratiksha.jpeg"
function StudentProfile() {

    const [showProfile, setProfile] = useState(false);


    function Profile() {
        setProfile(!showProfile);
    }
    return (
        <div style={{
            width: "450px",
            height: "400px",
            border: "3px solid black",
            boxShadow: "0px 0px 10px black",
            textAlign: "center", padding: "10px", color: "deeppink", backgroundColor: "lightyellow", margin: "auto", marginTop: "30px"
        }}>
            {showProfile && (
                <div>
                    <img src={pratiksha} style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "60%",
                    }} alt="" />
                    <h1>Student Profile</h1>

                    <p>Name :Pratiksha Bhor</p>
                    <p>Course :Computer Engineering</p>
                    <p>Year :BE Final year</p>
                    <p>City :Pune</p>


                </div>
            )}
            <button onClick={Profile}>{showProfile ? "hideprofile" : "showprofile"}</button>


        </div>

    )
}

export default StudentProfile;