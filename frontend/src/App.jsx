import React from "react";
import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom"
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import Register from "./components/Register.jsx";

const App=()=>{
  return(
    <Router>
       <Routes>
        <Route path="/" element={<Navigate to="/login"/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
       </Routes>
              

    </Router>
  )
}
export default App