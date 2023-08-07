import React, { useEffect, useState } from "react";
import "../styles/welcome.css"
import SignIn from "./SignIn";
import Home from "./Home";

function Welcome(){
    const [value, setValue] = useState('');
    useEffect(()=>{
        setValue(localStorage.getItem("email"))
    })
    return(
        <div >
        {value?(<Home/>):(<div className="WelcomeContainer">
        <h1>Welcome!</h1>
        <div className="WelcomeInfo">
            <p>Were working to get AudioHive, can't wait for you to join.</p>    
        </div>
        <SignIn/></div>)
        }

    </div>
    )
}
export default Welcome;