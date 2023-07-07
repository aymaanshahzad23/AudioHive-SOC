import React from "react";
import Header from "../components/Header";
// import VoiceChat from "./voice.jsx";

function Home(){
    const logout = () => {
        localStorage.clear()
        window.location.reload()
    } 
    return (<>
    <Header/>
    <button onClick={logout}>LogOut</button>;
    </>)
}

export default Home;




// We dont need to use Home.jsx, directly routing to Header.jsx
