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
        {/* <h1>Welcome!</h1> */}
        <div className="welcomeNav">
            <Link to='/'>
            <img src="logo.png" alt=""/>
            </Link>
            <button className="app">By IITB</button>
        </div>
        <div className="WelcomeInfo">
        Ready to add some 'social' to your distancing? <br /> <span className="hive">AudioHive's</span> The Place To Be!!!
        </div>
        <div className="btn">    
        <SignIn/>
        </div>
        </div>)
        }

    </div>
    )
}
export default Welcome;