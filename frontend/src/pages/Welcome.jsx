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
        <div className="">
        {value?(<Home/>):(<div className="WelcomeContainer">
        {/* <h1>Welcome!</h1> */}
        <div className="welcomeNav">
            <img src="logo.png" alt=""/>
            <button className="app">Made By</button>
        </div>
        <div className="WelcomeInfo">
        Ready to add some 'social' to your distancing? <br /> AudioHive's The Place To Be!!!
        </div>
        <SignIn/></div>)
        }

    </div>
    )
}
export default Welcome;