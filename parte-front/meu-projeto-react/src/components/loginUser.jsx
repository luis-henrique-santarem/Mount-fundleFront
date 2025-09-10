import React from 'react'
import './login.css'

function login() {
  return (
    <div className="container">
      <section className="auth-section">
        <h2>Login</h2>
        <form className="auth-form">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required/>

          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required/>

          <button type="submit" className="btn"> Entrar</button>
          
        </form>

        <p id="mensagem"></p>
      </section>
    </div>
  )
}

export default login