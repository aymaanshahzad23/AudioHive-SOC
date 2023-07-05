import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css"
import Welcome from "./pages/Welcome.jsx"
import Error404 from "./pages/Error404.jsx";
import PlanLayout from "./pages/Layouts/PlanLayout.jsx";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <PlanLayout>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/sign_in" element={<SignIn/>}/>
        <Route path="/sign_up" element={<SignUp/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
    </PlanLayout>
  )
} 