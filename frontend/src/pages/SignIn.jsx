import React, { useState } from "react";
import "../styles/signin.css"
import {createUserDocumentFromAuth, signInWithGooglePopup} from "../pages/config.js"
function SignIn(){
    const logGoogleUser = async () => {
        const user = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
        window.location.reload();
    }
    
    return(
        <div className="SignIn">
                <button className="button" onClick={logGoogleUser}>Sign Up With Google</button>
        </div>
    )
}

export default SignIn;