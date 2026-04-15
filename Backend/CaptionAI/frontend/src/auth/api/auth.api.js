import axios from 'axios';


export async function register({ username, password }) {
    try {
        const response = await axios.post('/api/auth/register', { username, password });
        return response.data;
    } catch (error) {
        console.error("Register API error:", error);
        throw error;
    }
}


export async function login ({ email, password }) {
    try {
        const response = await axios.post('/api/auth/login', { email, password });
        return response.data;
    } catch (error) {
        console.error("Login API error:", error);
        throw error;
    }
}