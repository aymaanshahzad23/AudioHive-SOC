import {BrowserRouter, Routes, Route} from "react-router-dom";
// import "./App.css"
import Home from "./pages/Home.jsx"
import Error404 from "./pages/Error404.jsx";
import PlanLayout from "./pages/Layouts/PlanLayout.jsx";

export default function App() {
  return (
    <PlanLayout>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
    </PlanLayout>
  )
} 