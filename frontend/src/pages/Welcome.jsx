import React, { useEffect, useState } from "react";
import "../styles/welcome.css"
// import  "./SignIn.jsx";
import { auth, provider } from "./config.jsx";
import { signInWithPopup } from "firebase/auth";
// import Header from "../components/Header";
import { Link } from "react-router-dom";
import Home from "./Home";

function Welcome(){
    const [value, setValue] = useState('');
    const loginWithGoogle = () => {
        signInWithPopup(auth, provider).then((data)=>{
            setValue(data.user.email);
            localStorage.setItem("email", data.user.email)
        })  
    }
    useEffect(()=>{
        setValue(localStorage.getItem("email"))
    })
    return(
        <div className="WelcomeContainer">
        <h1>Welcome!</h1>
        <div className="WelcomeInfo">
            <p>Were working to get AudioHive, can't wait for you to joinnnnnnnn.</p>
            <p>Were working to get AudioHive, can't wait for you to join.</p>
            <p>Were working to get AudioHive, can't wait for you to join.</p>
            <p>Were working to get AudioHive, can't wait for you to join.</p>
            <p>Were working to get AudioHive, can't wait for you to join.</p>      
        </div>
        <div className="actionBtn btn">
            {/* <Link to> */}
            {value?<Home/>:
            <button onClick={loginWithGoogle}>Login With Google</button>}
            {/* </Link> */}
            
        </div>
    </div>
    )
}
export default Welcome;