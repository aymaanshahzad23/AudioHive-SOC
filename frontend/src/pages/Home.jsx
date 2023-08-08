import React from "react";
import { useState } from "react";
import Header from "../components/Header.jsx";
// import {DailyInfoCard} from "../components/dailyInfoCard.jsx"
import {AiOutlinePicCenter, AiOutlinePlus} from "react-icons/ai";
// import {BsGrid3X3Gap} from "react-icons/bs";
import "../styles/home.css"
import { useNavigate } from "react-router-dom";
import Lobby from "../components/Lobby.jsx";
// import VoiceCall from "../components/VoiceCall.jsx";
function Home(){
    return (
        <div className="home">
            <div className="homeHeader">
                <Header/>
            </div>
            <div className="lobbyContainer">
                <div className="joinLobby">
                    <div className="homeContainer">
                        Welcome
                    </div>
                    <div className="lobby">
                        <Lobby/>
                    </div>
                </div>
            </div>
        </div>
    
    )
}
export default Home;
