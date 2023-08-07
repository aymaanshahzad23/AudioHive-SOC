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
    
    const navigate = useNavigate();
    const [state, setState] = useState(false);
    const [title, setTitle] = useState("");
    return (
        <div className="home">
            <Header className="Header"/>
            <div className="home_container">
                NAME
            </div>
            <div className="action_btn">
                <Lobby/>
            </div>
        </div>
    
    )
}
export default Home;
