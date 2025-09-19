import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Cadastro from "./components/cadastro";
import Login from "./components/loginUser";
import RingScreen from "./components/ringscreen";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/ringscreen" />} />
<Route path="/ringscreen" element={<RingScreen />} />

       {/*<Route path="/" element={<Navigate to="/cadastro" />} /> */}  
        {/*<Route path="/cadastro" element={<Cadastro />} /> */} 
        {/* <Route path="/login" element={<Login />} /> */} 
      </Routes>
    </Router>
  );
}