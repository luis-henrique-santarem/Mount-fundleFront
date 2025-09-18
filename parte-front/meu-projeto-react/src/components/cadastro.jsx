import React, { useRef, useState } from "react";
import "./cadastro.css";
import { useNavigate } from "react-router";

export default function Cadastro() {
  const navigate = useNavigate();

    const [name, setName]  = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()  // Evita que a página recarregue ao enviar o formulário
    try {
       const response = await fetch(`http://localhost:3307/auth/register`, {
        method: 'POST',                        // Método HTTP da requisição
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
       },
       body: JSON.stringify({ name, email, password }) // Envia os dados como JSON
      })

      // Verifica se a API retornou erro 
      if (!response.ok) throw new Error("Erro ao cadastrar")

      document.getElementById("mensagem").textContent = "cadastro realizado com sucesso!";
      document.getElementById("mensagem").style.color = "green";
    } catch (err) {
      // Captura qualquer erro que aconteça durante a requisição ou conversão
      console.error('Erro ao buscar registrar usuario:', err)
       document.getElementById("mensagem").textContent = "Erro ao fazer cadastro";
      document.getElementById("mensagem").style.color = "red";
    }
  }

  return (
    <div className="container">
      <section className="auth-section">
        <h2>Mount & Fundle</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} required/>
          <label htmlFor="email">E-mail:</label>

          <input type="email" id="email" name="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}required/>
          <label htmlFor="senha">Senha:</label>

          <input type="password" id="senha" name="senha" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)}required />

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