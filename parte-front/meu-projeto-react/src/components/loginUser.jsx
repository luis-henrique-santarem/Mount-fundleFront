import React, { useState } from 'react'
import './login.css'

function login() {

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  async function loginUser(e) {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3307/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email: email, password: password })
      });

      if (!response.ok) {
        const erro = await response.text();
        return erro
      }

      // Converte a resposta em JSON
      const dados = await response.json();

      // O token retornado pelo servidor
      const token = dados.token;

      // Armazena o token no localStorage
      localStorage.setItem("token", token);

      document.getElementById("mensagem").textContent = "Login realizado com sucesso"
      document.getElementById("mensagem").style.color = "green"
      window.location.href = "/ringscreen"

    } catch (err) {
      console.log("Erro: " + err)
      document.getElementById("mensagem").textContent = "Erro ao fazer login " + err;
      document.getElementById("mensagem").style.color = "red"
    }
  }


  return (
    <div className="container">
      <section className="auth-section">
        <h2>Login</h2>
        <form className="auth-form" onSubmit={loginUser}>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="btn"> Entrar</button>

        </form>

        <p id="mensagem"></p>
      </section>
    </div>
  )
}

export default login