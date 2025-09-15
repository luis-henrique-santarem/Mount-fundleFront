import React from 'react'
import './login.css'
import { useState } from "react";

function login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()  // Evita que a página recarregue ao enviar o formulário
    try {
       const response = await fetch(`http://localhost:3307/auth/login`, {
        method: 'POST',                        // Método HTTP da requisição
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
       },
       body: JSON.stringify({email, password }) // Envia os dados como JSON
      })

      // Converte a resposta da requisição em objeto JavaScript
      const data = await response.json()



      // Verifica se a API retornou erro 
      if (data.erro) return

       // Exibe mensagem de sucesso
      document.getElementById("mensagem").textContent = "Login realizado com sucesso!";
      document.getElementById("mensagem").style.color = "green";
    } catch (err) {
      // Captura qualquer erro que aconteça durante a requisição ou conversão
      console.error('Erro ao buscar registrar usuario:', err)
             document.getElementById("mensagem").textContent = "Erro ao fazer login";
      document.getElementById("mensagem").style.color = "red";
    }
  }

  return (
    <div className="container">
      <section className="auth-section">
        <h2>Login</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" placeholder="Digite seu e-mail" value={email}   onChange={(e) => setEmail(e.target.value)} required/>

          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" placeholder="Digite sua senha" value={password}onChange={(e) => setPassword(e.target.value)}  required/>

          <button type="submit" className="btn"> Entrar</button>
          
        </form>

        <p id="mensagem"></p>
      </section>
    </div>
  )
}

export default login