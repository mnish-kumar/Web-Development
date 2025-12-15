export const TOKEN_KEY = 'captionai_token'
export const USERNAME_KEY = 'captionai_username'

export const saveAuth = (token, username) => {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token)
  }
  if (username) {
    localStorage.setItem(USERNAME_KEY, username)
  }
}

export const clearAuth = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USERNAME_KEY)
}

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

export const getUsername = () => {
  return localStorage.getItem(USERNAME_KEY)
}
