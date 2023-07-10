import React from "react";
import Header from "../components/Header.jsx";
// import {DailyInfoCard} from "../components/dailyInfoCard.jsx"
import {AiOutlinePicCenter, AiOutlinePlus} from "react-icons/ai";
import {BsGrid3X3Gap} from "react-icons/bs";
import "../styles/home.css"
// import VoiceChat from "../components/VoiceChat.jsx";

function Home(){
    
    
    return (
        <div className="home">
            <Header className="Header"/>
            <div className="home_container">NAME</div>
            <div className="action_btn btn">
                <button >
                    {/* <AiOutlinePicCenter/> */}
                    <AiOutlinePlus/>
                    Start a room 
                </button>
                <button>
                    <BsGrid3X3Gap/>
                    MENU
                </button>
            </div>
        </div>
    
    )
}
export default Home;
