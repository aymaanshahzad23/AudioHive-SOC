import React, { useEffect, useState } from "react";
import "../styles/welcome.css"
// import  "./SignIn.jsx";
// import Header from "../components/Header";
// import { Link } from "react-router-dom";
// import Home from "./Home";
import SignIn from "./SignIn";
import Home from "./Home";
// import { useState, useEffect } from "react";

function Welcome(){
    const [value, setValue] = useState('');
    // value.toString()
    useEffect(()=>{
        setValue(localStorage.getItem("email"))
    })
    return(
        <div >
        {value?<Home/>:<div className="WelcomeContainer">
        <h1>Welcome!</h1>
        <div className="WelcomeInfo">
            <p>Were working to get AudioHive, can't wait for you to joinnnnnnnn.</p>
            <p>Were working to get AudioHive, can't wait for you to join.</p>
            <p>Were working to get AudioHive, can't wait for you to join.</p>
            <p>Were working to get AudioHive, can't wait for you to join.</p>
            <p>Were working to get AudioHive, can't wait for you to join.</p>      
        </div>
        <SignIn/></div>}

    </div>
    )
}
export default Welcome;