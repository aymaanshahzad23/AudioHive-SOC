import React from "react";
import "../styles/welcome.css"
import  "./SignIn.jsx"
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
function Welcome(){
    return(
        <div className="WelcomeContainer">
        <h1>Welcome!</h1>
        <div className="WelcomeInfo">
            <p>Were working to get AudioHive, can't wait for you to join.</p>
            <p>Were working to get AudioHive, can't wait for you to join.</p>
            <p>Were working to get AudioHive, can't wait for you to join.</p>
            <p>Were working to get AudioHive, can't wait for you to join.</p>
            <p>Were working to get AudioHive, can't wait for you to join.</p>      
        </div>
        <div className="actionBtn">
            <Link exact to="/sign_in" className="PrimaryBtn">Sign-In</Link><br />
            <Link exact to="/sign_up" className="SecondaryBtn">Sign-Up</Link>
        </div>
    </div>
    )
}
export default Welcome;