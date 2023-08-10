import React from "react";
import { Link } from 'react-router-dom';
import "../styles/header.css";

function Header(){
    const logout = () => {
        localStorage.clear()
        window.location.reload();
    }
    return(
    <>
        <div className="Header">
            
            <Link to = "/">
                <img className="logoMain" src = "logo.png" alt = "" />
            </Link>
            
            <div className = 'nav_items'>
            
                <Link to = "/features">
                    <img src = "/images/invite.png" alt = "" />
                </Link>
            
                <Link to = "/features">
                    <img src = "/images/calendar.png" alt = "" />
                </Link>
            
                <Link to = "/features">
                    <img src = "/images/noti.png" alt = "" />
                </Link>

                <Link to = "/features">
                    <img className="pfp" src = {localStorage.getItem("profilePic")} alt = "" />
                </Link>
            
            </div>
            <button className="logout" onClick={logout}>Logout</button>
        </div>
    </>
    )
}
export default Header;