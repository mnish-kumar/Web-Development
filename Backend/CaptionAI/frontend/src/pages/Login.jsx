import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/hooks/use.auth'


const Login = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()

  const { handleLogin, error, setError, isloading, setLoading } = useAuth()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!username || !password || !email) {
      setError('Please enter all required fields.')
      return
    }

    setLoading(true)
    setError('')

    try {
      await handleLogin({ username, email, password });

      navigate('/dashboard')
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
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
          {/* {error && <p className="error-message">{error}</p>} */}

          <div className="field">
            <label className="field-label" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-input"
              placeholder="Enter email"
              autoComplete="email"
            />
          </div>
          {/* {error && <p className="error-message">{error}</p>} */}

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
          {/* {error && <p className="error-message">{error}</p>} */}

          <button
            type="submit"
            className="primary-button"
            disabled={!username || !password || !email || isloading}
          >
            {isloading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
        <p className="auth-switch">
          New here?{' '}
          <Link to="/register" className="auth-link">Create an account</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
