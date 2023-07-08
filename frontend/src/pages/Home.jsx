<<<<<<< HEAD
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
=======
// import React from "react";

// function Home(){
//     const logout = () => {
//         localStorage.clear()
//         window.location.reload()
//     } 
//     return (
//     <button onClick={logout}>LogOut</button>);
// }
>>>>>>> bd69105fbb3af45e8d33f41729416dfc12f25d49

// export default Home;




//We dont need to use Home.jsx, directly routing to Header.jsx
