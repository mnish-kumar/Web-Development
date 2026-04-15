import { useContext } from "react";
import AuthContext from "../services/auth.conrext";
import { login, logout, register } from "../api/auth.api";
import { createPost } from "../api/post.api";

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    const { user, setUser, isloading, setLoading, error, setError } = context;

    const handleRegister = async ( { username, name, email, password }) => {
        try {
            setLoading(true);
            const userData = await register({ username, name, email, password });
            setUser(userData.user);
            return{ success: true };
        }catch (error) {
            console.error("Registration failed:", error);
            setError(error.message);
            throw error;
        }finally {
            setLoading(false);
        }
    }

    const handleLogin = async ({ username, email, password }) => {
        try {
            setLoading(true);
            const userData = await login({ username, email, password });
            setUser(userData.user);
            return { success: true };
        }catch (error) {
            console.error("Login failed:", error);
            setError(error.message);
            throw error;
        }finally {
            setLoading(false);
        }
    }

    const handleLogout = async () => {
        try {
            setLoading(true);
            await logout();
            setUser(null);
        }catch (error) {
            setError(error.message);
            console.error("Logout failed:", error);
        }finally {
            setLoading(false);
        }
    }

    const handleCreatePost = async ({ image }) => {
        try {
            setLoading(true);

            if (!image) {
                throw new Error('Image file is required.');
            }

            const formData = new FormData();
            formData.append('image', image);

            const postData = await createPost(formData);
            return { success: true, postData };
        } catch (error) {
            console.error("Create Post failed:", error);
            setError(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    }


    return {
        user,
        setUser,
        isloading,
        setLoading,
        handleLogin,
        handleRegister,
        handleLogout,
        handleCreatePost,
        error,
        setError
    }
}