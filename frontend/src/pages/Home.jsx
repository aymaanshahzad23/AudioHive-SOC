import React from "react";
import { useState } from "react";
import Header from "../components/Header.jsx";
import {AiOutlinePicCenter, AiOutlinePlus} from "react-icons/ai";
import "../styles/home.css"
import Lobby from "../components/Lobby.jsx";
function Home(){
    return (
        <div className="home">
            <div className="homeHeader">
                <Header/>
            </div>
            <div className="lobbyContainer">
                <div className="joinLobby">
                    <div className="homeContainer t">
                            AudioHive
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
