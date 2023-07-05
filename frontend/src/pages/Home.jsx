import React from "react";

function Home(){
    const logout = () => {
        localStorage.clear()
        window.location.reload()
    } 
    return (
    <button onClick={logout}>LogOut</button>);
}

export default Home;