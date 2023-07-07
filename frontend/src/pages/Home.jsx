import React from "react";
import Header from "../components/Header.jsx";

function Home(){
    const logout = () => {
        localStorage.clear()
        window.location.reload()
    } 
    return (
        <>
            <Header/>
            <button onClick={logout}>LogOut</button>;
        </>
    
    )
}

export default Home;