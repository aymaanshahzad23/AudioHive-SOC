import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Welcome from "./pages/Welcome.jsx";
import Error404 from "./pages/Error404.jsx";
import PlanLayout from "./pages/Layouts/PlanLayout.jsx";
import SignIn from "./pages/SignIn";
import Room from "./pages/Room";
import Features from "./pages/Features";

export default function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/sign_in" element={<SignIn/>}/>
          <Route path = "/room/:roomId" element={<Room/>}/>
          <Route path = "/features" element={<Features/>}/>
          {/* <Route path = "/profile" element={</>} /> */}
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </PlanLayout>
    </BrowserRouter>
  )
} 