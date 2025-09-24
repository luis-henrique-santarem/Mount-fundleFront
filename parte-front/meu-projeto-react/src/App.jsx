import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Cadastro from "./components/cadastro";
import Login from "./components/loginUser";
import RingScreen from "./components/RingScreen";
import CreateCharacter from "./components/CreateCharacter";
import Home from "../src/pages/home/Home";


export default function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Navigate to="/Cadastro" />} />
        <Route path="/ringscreen" element={<RingScreen />} />
        <Route path="/player/register" element={<CreateCharacter/>}/>

        {/*<Route path="/" element={<Navigate to="/cadastro" />} /> */}
        /*<Route path="/cadastro" element={<Cadastro />} /> */
        /* <Route path="/login" element={<Login />} /> */
        <Route path="home" element={<Home/>}/>

      </Routes>
    </Router>
  );
}