import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Tentando fazer login...') // Debug
    
    // QUALQUER email/senha funciona
    if (email || senha) {
      console.log('Login válido, salvando dados...')
      localStorage.setItem('userToken', 'demo-token-123')
      localStorage.setItem('userData', JSON.stringify({
        nome: 'Professor ' + email,
        email: email
      }))
      console.log('Dados salvos, navegando...')
      
      // Força a navegação
      window.location.href = '/professor'
    } else {
      alert('Digite qualquer email e senha')
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Escola Mobile</h1>
        <p>Login do Professor - Desenvolvimento</p>
        
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit">Entrar no Sistema</button>
        </form>

     
      </div>
    </div>
  )
}