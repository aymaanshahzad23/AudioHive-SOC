import React from "react";
import Header from "../components/Header.jsx";
// import {DailyInfoCard} from "../components/dailyInfoCard.jsx"
import {AiOutlinePicCenter, AiOutlinePlus} from "react-icons/ai";
import {BsGrid3X3Gap} from "react-icons/bs";

function Home(){
    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }
    return (
        <>
            <Header/>
            <div className="home_container">NAME</div>
            <div className="action_btn">
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
            <button onClick={logout}>LogOut</button>;
        </>
    
    )
}
// import React from "react";


export default Home;




// We dont need to use Home.jsx, directly routing to Header.jsx
