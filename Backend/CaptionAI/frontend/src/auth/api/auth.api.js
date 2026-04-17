import axios from 'axios';

const api = axios.create({
    withCredentials: true,
});

export async function register({ username, name, email, password }) {
    try {
        const response = await api.post('/api/auth/register', { username, name, email, password });
        return response.data;
    } catch (error) {
        console.error("Register API error:", error);
        throw error;
    }
}

export async function login({ username, email, password }) {
    try {
        const response = await api.post('/api/auth/login', { username, email, password });
        return response.data;
    } catch (error) {
        console.error("Login API error:", error);
        throw error;
    }
}

export async function getMe() {
    try {
        const response = await api.get('/api/auth/me');
        return response.data;
    } catch (error) {
        console.error("GetMe API error:", error);
        throw error;
    }
}

export async function logout() {
    try {
        const response = await api.post('/api/auth/logout');
        console.log("Logout response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Logout API error:", error);
        throw error;
    }
}