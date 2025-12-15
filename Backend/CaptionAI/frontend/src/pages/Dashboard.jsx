import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clearAuth, getToken, getUsername } from '../auth'

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('')
  const [caption, setCaption] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const username = getUsername()
  const token = getToken()

  const handleLogout = () => {
    clearAuth()
    navigate('/login')
  }

  const handleFileChange = (event) => {
    const file = event.target.files && event.target.files[0]
    if (!file) {
      setSelectedFile(null)
      setPreviewUrl('')
      return
    }

    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file.')
      setSelectedFile(null)
      setPreviewUrl('')
      return
    }

    setError('')
    setCaption('')
    setSelectedFile(file)
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
  }

  const handleGenerate = async (event) => {
    event.preventDefault()

    if (!token) {
      setError('You are not authenticated. Please login again.')
      return
    }

    if (!selectedFile) {
      setError('Please select an image before generating a caption.')
      return
    }

    setIsLoading(true)
    setError('')
    setCaption('')

    try {
      const formData = new FormData()
      formData.append('image', selectedFile)

      const response = await fetch('http://localhost:3000/api/post/upload', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })

      if (!response.ok) {
        if (response.status === 401) {
          clearAuth()
          navigate('/login')
          throw new Error('Session expired. Please login again.')
        }
        const data = await response.json().catch(() => null)
        const message = data?.message || 'Failed to generate caption. Please try again.'
        throw new Error(message)
      }

      const data = await response.json()
      const generatedCaption = data?.caption || data?.message || 'No caption returned.'
      setCaption(generatedCaption)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="app-root">
      <div className="card dashboard-card">
        <header className="dash-header">
          <div>
            <h1 className="title">CaptionAI Dashboard</h1>
            <p className="subtitle">
              {username ? `Logged in as ${username}` : 'You are authenticated.'}
            </p>
          </div>
          <button type="button" className="secondary-button" onClick={handleLogout}>
            Logout
          </button>
        </header>

        {!token && (
          <p className="message error">
            You are not authenticated. Please login again.
          </p>
        )}

        <form className="form" onSubmit={handleGenerate}>
          <label className="file-label">
            <span className="file-label-text">Choose an image</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input"
            />
          </label>

          {previewUrl && (
            <div className="preview-wrapper">
              <img src={previewUrl} alt="Selected preview" className="preview-image" />
            </div>
          )}

          <button
            type="submit"
            className="primary-button"
            disabled={!selectedFile || isLoading}
          >
            {isLoading ? 'Generating...' : 'Generate Caption'}
          </button>
        </form>

        {error && <p className="message error">{error}</p>}
        {caption && !error && (
          <div className="caption-box">
            <h2 className="caption-title">Generated Caption</h2>
            <p className="caption-text">{caption}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
