import React from "react";
import Header from "../components/Header.jsx";
import {AiOutLinePicCenter, AiOutLinePlus} from "react-icons/ai";
import {BsGrid3X3gap} from "react-icons/bs";
function Home(){
    const logout = () => {
        localStorage.clear()
        window.location.reload()
    } 
    return (
        <>
            <Header/>
            <div className="style.home_container"><DailyInfoCard/></div>
            <div className="style.action_btn">
                <button>
                    <AiOutLinePlus/>
                    Start a room
                </button>
                <button>
                    <BsGrid3X3gap/>
                </button>
            </div>
            <button onClick={logout}>LogOut</button>;
        </>
    
    )
}
// import React from "react";

// function Home(){
//     const logout = () => {
//         localStorage.clear()
//         window.location.reload()
//     } 
//     return (
//     <button onClick={logout}>LogOut</button>);
// }

// export default Home;




//We dont need to use Home.jsx, directly routing to Header.jsx
