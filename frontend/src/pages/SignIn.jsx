import React, { useState } from "react";
import "../styles/signin.css"
import {createUserDocumentFromAuth, signInWithGooglePopup} from "../pages/config.js"
function SignIn(){
    const logGoogleUser = async () => {
        const user = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
        window.location.reload();
        // console.log(response);
    }
    
    return(
        <div className="SignIn">
                <button className="btn" onClick={logGoogleUser}>Sign In With Google</button>
        </div>
    )
}

export default SignIn;