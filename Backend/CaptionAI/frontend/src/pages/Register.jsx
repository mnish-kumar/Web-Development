import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/hooks/use.auth'

const Register = () => {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const { handleRegister, error, setError, isloading, setLoading } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!username || !name || !email || !password) {
      setError('Please fill in all fields.')
      return
    }

    const data = {
      username,
      name,
      email,
      password,
    };
    setLoading(true)
    setError('')

    try {
      await handleRegister(data);

      setEmail('')
      setPassword('')
      setUsername('')
      setName('')
      navigate('/login')
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
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
            <label className="field-label" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-input"
              placeholder="Enter name"
              autoComplete="name"
            />
          </div>

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
            disabled={!username || !name || !email || !password || isloading}
          >
            {isloading ? 'Creating account...' : 'Register'}
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
