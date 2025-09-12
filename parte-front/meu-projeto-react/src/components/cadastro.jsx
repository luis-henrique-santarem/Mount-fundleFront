import React, { useRef } from "react";
import "./cadastro.css";
import { useNavigate } from "react-router";
import { PostUSer } from '../services/index'

export default function Cadastro() {
  const navigate = useNavigate();

  const nomeRef = useRef();
  const emailRef = useRef();
  const senhaRef = useRef();


  function cadastro() {
    const nome = nomeRef.current.value;
    const email = emailRef.current.value;
    const senha = senhaRef.current.value;

    

    document.getElementById("mensagem").textContent = PostUSer(nome, email, senha);
    document.getElementById("mensagem").style.color = "green";
  }

  return (
    <div className="container">
      <section className="auth-section">
        <h2>Mount & Fundle</h2>
        <form className="auth-form">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" placeholder="Digite seu nome" ref={nomeRef} required />
          <label htmlFor="email">E-mail:</label>

          <input type="email" id="email" name="email" placeholder="Digite seu e-mail" ref={emailRef} required />
          <label htmlFor="senha">Senha:</label>

          <input type="password" id="senha" name="senha" placeholder="Digite sua senha" ref={senhaRef} required />

          <button type="submit" className="btn" id="botao-registro" onClick={cadastro}> Cadastrar</button>

          <p className="login-link" onClick={() => {
            navigate("/login")
          }}>Já possui um personagem? Faça Login</p>
        </form>
        <p id="mensagem"></p>
      </section>
    </div>

  );
}