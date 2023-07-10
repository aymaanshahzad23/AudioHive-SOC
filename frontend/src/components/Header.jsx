import React from "react";
import { Link } from 'react-router-dom';
import "../styles/header.css";

function Header(){
    const logout = () => {
        localStorage.clear()
        window.location.reload();
    }
    return(
        <div className="Header">
            
            <Link to = "/explore">
                <img src = "/images/search.png" alt = "" />
            </Link>
            
            <div className = 'nav_items'>
            
                <Link to = "/friends_invite">
                    <img src = "/images/invite.png" alt = "" />
                </Link>
            
                <Link to = "/upcoming">
                    <img src = "/images/calendar.png" alt = "" />
                </Link>
            
                <Link to = "/activity">
                    <img src = "/images/noti.png" alt = "" />
                </Link>

                <Link to = "/profile">
                    <img className="pfp" src = {localStorage.getItem("profilePic")} alt = "" />
                </Link>
            
            </div>
            <button className="" onClick={logout}>LogOut</button>
        </div>
        
    )
}
export default Header;