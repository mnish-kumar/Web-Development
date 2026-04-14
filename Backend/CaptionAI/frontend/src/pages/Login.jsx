import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


const Login = () => {
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
      const response = await axios.post('http://localhost:3000/api/auth/login', { username, password })

      saveAuth(response.data.token, username)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="app-root">
      <div className="card auth-card">
        <h1 className="title">Welcome back</h1>
        <p className="subtitle">Login to access your CaptionAI dashboard.</p>

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
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="primary-button"
            disabled={!username || !password || isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {error && <p className="message error">{error}</p>}

        <p className="auth-switch">
          New here?{' '}
          <Link to="/register" className="auth-link">Create an account</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
