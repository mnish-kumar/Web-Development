import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/hooks/use.auth'




const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('')
  const [caption, setCaption] = useState('')
  const navigate = useNavigate()

  const { user, handleLogout, isloading, error, setError, handleCreatePost } = useAuth();
  const username = user?.username;

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl)
      }
    }
  }, [previewUrl])

  const logoutHandle = () => {
    handleLogout();
    navigate('/login')
  }

  const handleFileChange = (event) => {
    const file = event.target.files && event.target.files[0]
    if (!file) {
      setSelectedFile(null)
      if (previewUrl) URL.revokeObjectURL(previewUrl)
      setPreviewUrl('')
      return
    }

    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file.')
      setSelectedFile(null)
      if (previewUrl) URL.revokeObjectURL(previewUrl)
      setPreviewUrl('')
      return
    }

    setError('')
    setCaption('')
    setSelectedFile(file)
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
  }

  const handleGenerate = async (event) => {
    event.preventDefault()

    if (!user) {
      setError('You are not authenticated. Please login again.')
      return
    }

    if (!selectedFile) {
      setError('Please select an image before generating a caption.')
      return
    }

    setError('')
    setCaption('')

    try {
      const { postData } = await handleCreatePost({ image: selectedFile });
      const data = postData || {};
      const generatedCaption = data?.caption || data?.message || 'No caption returned.'
      setCaption(generatedCaption)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <div className="app-root">
      <div className="card dashboard-card">
        <header className="dash-header">
          <div className='username-header'>
            <h1 className="title">Capify-AI</h1>
            <p className="subtitle">
              {`Welcome dear🎉:) ${username}`}
            </p>
          </div>
          <button type="button" className="secondary-button" onClick={logoutHandle}>
            Logout
          </button>
        </header>

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
            disabled={!selectedFile || isloading}
          >
            {isloading ? 'Generating...' : 'Generate Caption'}
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
