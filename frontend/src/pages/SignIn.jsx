import React, { useState } from "react";
import "../styles/signin.css"
import {createUserDocumentFromAuth, signInWithGooglePopup} from "../pages/config.js"
function SignIn(){
    const logGoogleUser = async () => {
        await signInWithGooglePopup();
        window.location.reload();
    }
    
    return(
        <div className="SignIn">
                <button className="btn" onClick={logGoogleUser}>SignInWithGoogle</button>
        </div>
    )
}

export default SignIn;