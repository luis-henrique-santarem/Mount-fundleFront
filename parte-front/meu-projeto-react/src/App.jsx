import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Cadastro from "./components/cadastro";
import Login from "./components/loginUser";
import World from "./components/world";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/cadastro" />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/world" element={<World/>}/>
      </Routes>
    </Router>
  );
}