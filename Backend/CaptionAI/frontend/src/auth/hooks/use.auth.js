import { useContext } from "react";
import AuthContext from "../services/auth.conrext";
import { login } from "../api/auth.api";

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    const { user, setUser, loading, setLoading } = context;

    const handleLogin = async ({ email, password }) => {
        try {
            setLoading(true);
            const userData = await login({ email, password });
            setUser(userData);
        }catch (error) {
            console.error("Login failed:", error);
        }finally {
            setLoading(false);
        }
    }

    return {
        user,
        setUser,
        loading,
        setLoading,
        handleLogin,
    }
}