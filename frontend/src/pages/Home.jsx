import React from "react";
import Header from "../components/Header.jsx";
// import {DailyInfoCard} from "../components/dailyInfoCard.jsx"
import {AiOutlinePicCenter, AiOutlinePlus} from "react-icons/ai";
import {BsGrid3X3Gap} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
// import Welcome from "./Welcome.jsx";

function Home(){
    
    const logout = () => {
        localStorage.clear()
        window.location.reload();
    }
    return (
        <>
            <Header className="Header"/>
            {/* <div className="home_container">NAME</div> */}
            <div className="action_btn btn">
                <button>
                    {/* <AiOutlinePicCenter/> */}
                    <AiOutlinePlus/>
                    Start a room 
                </button>
                <button>
                    <BsGrid3X3Gap/>
                    MENU
                </button>
            </div>
            <Link to="/">
                <button className="btn" onClick={logout}>LogOut</button>
            </Link>
        </>
    
    )
}
// import React from "react";


export default Home;




// We dont need to use Home.jsx, directly routing to Header.jsx
