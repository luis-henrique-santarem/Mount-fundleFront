import React, { useState } from 'react'
import './login.css'
import { addTokenToStorage, getToken } from '../utils/tokenActions'
import { Navigate, useNavigate } from 'react-router'


function login() {

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  async function loginUser(e) {
    e.preventDefault();
    console.log("teste")
    try {

      const request = await fetch('http://localhost:3307/auth/login', {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email: email, password: password })
      });

        const response = await request.json()
        addTokenToStorage(response.token)
        navigate("/player/register")


    } catch (err) {
      console.log(err)
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