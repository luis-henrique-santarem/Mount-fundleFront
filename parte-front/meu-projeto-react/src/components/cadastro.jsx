import React from "react";
import "./cadastro.css";
import { useNavigate } from "react-router";


export default function Cadastro() {
    const navigate = useNavigate();
  return (
    <div className="container">
      <section className="auth-section">
        <h2>Mount & Fundle</h2>
        <form className="auth-form">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required/>
          <label htmlFor="email">E-mail:</label>

          <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required/>
          <label htmlFor="senha">Senha:</label>

          <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required />

          <button type="submit" className="btn"> Cadastrar</button>
          
          <p className="login-link" onClick={() => {
           navigate("/login")
          }}>Já possui um personagem? Faça Login</p>
        </form>
        <p id="mensagem"></p>
      </section>
    </div>
  );
}