import React, { useEffect, useState } from "react";
import "../styles/welcome.css"
import SignIn from "./SignIn";
import Home from "./Home";
import { Link } from "react-router-dom";

function Welcome(){
    const [value, setValue] = useState('');
    useEffect(()=>{
        setValue(localStorage.getItem("email"))
    })
    return(
        <div className="">
        {value?(<Home/>):(<div className="WelcomeContainer">
        <div className="welcomeNav">
            <Link to='https://github.com/aymaanshahzad23/AudioHive-SOC' target="_blank">
            <img className="appLogo" src="logo.png" alt=""/>
            </Link>
            <button className="app">By IITB</button>
        </div>
        <div className="WelcomeInfo">
        Ready to add some 'social' to your distancing? <br /> <span className="hive">AudioHive's</span> The Place To Be!!!
        </div>
        <div className="loginButton">    
        <SignIn/>
        </div>
        </div>
        )}
    </div>
    )
}
export default Welcome;