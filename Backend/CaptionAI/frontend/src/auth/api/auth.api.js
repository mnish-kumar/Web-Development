import axios from 'axios';

export async function login ({ email, password }) {
    try {
        const response = await axios.post('/api/auth/login', { email, password });
        return response.data;
    } catch (error) {
        console.error("Login API error:", error);
        throw error;
    }
}