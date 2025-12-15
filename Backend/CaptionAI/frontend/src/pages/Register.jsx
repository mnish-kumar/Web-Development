import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!username || !password) {
      setError('Please enter both username and password.')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        const message = data?.message || 'Registration failed. Please try again.'
        throw new Error(message)
      }

      navigate('/login')
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="app-root">
      <div className="card auth-card">
        <h1 className="title">Create an account</h1>
        <p className="subtitle">Register to start using CaptionAI.</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label className="field-label" htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="text-input"
              placeholder="Enter username"
              autoComplete="username"
            />
          </div>

          <div className="field">
            <label className="field-label" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-input"
              placeholder="Enter password"
              autoComplete="new-password"
            />
          </div>

          <button
            type="submit"
            className="primary-button"
            disabled={!username || !password || isLoading}
          >
            {isLoading ? 'Creating account...' : 'Register'}
          </button>
        </form>

        {error && <p className="message error">{error}</p>}

        <p className="auth-switch">
          Already have an account?{' '}
          <Link to="/login" className="auth-link">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
