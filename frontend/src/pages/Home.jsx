import React from "react";
import { useState } from "react";
import Header from "../components/Header.jsx";
// import {DailyInfoCard} from "../components/dailyInfoCard.jsx"
import {AiOutlinePicCenter, AiOutlinePlus} from "react-icons/ai";
import {BsGrid3X3Gap} from "react-icons/bs";
import "../styles/home.css"
import { useNavigate } from "react-router-dom";
function Home(){
    
    const navigate = useNavigate();
    const [state, setState] = useState(false);
    const [title, setTitle] = useState("");
    return (
        <div className="home">
            <Modal_ state={state} setState={setState} title={title} />
            <Header className="Header"/>
            <div className="home_container">NAME</div>
            <div className="action_btn">
                
                <button className="btn" onClick={()=>{
                    setTitle("create room");
                    setState(true);
                    navigate("/vc");
                    }}>
                    <AiOutlinePlus/>
                    Start a room 
                </button>
                
                {/* <button>
                    <BsGrid3X3Gap/>
                    MENU
                </button> */}
            
            </div>
        </div>
    
    )
}
export default Home;
