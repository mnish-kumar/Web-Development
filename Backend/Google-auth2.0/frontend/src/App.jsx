import { useEffect } from 'react'
import { SignupForm } from '@/components/signup-form'
import axios from 'axios'

const App = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')
    if (token) {
      axios
        .get('http://localhost:3000/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          const user = res?.data?.user || {}
          const name = user.displayName || user.name || 'Unknown'
          const email = user.email || 'Unknown'
          console.log('User:', { name, email })
        })
        .catch((err) => {
          console.error('Failed to fetch user:', err?.response?.data || err.message)
        })
    }
  }, [])
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto flex min-h-screen items-center justify-center p-4">
        <SignupForm className="w-full max-w-md" />
      </div>
    </main>
  )
}

export default App