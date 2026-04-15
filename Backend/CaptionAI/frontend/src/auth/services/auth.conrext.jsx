import { createContext, useEffect, useState } from "react";
import { getMe } from "../api/auth.api";

export const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isloading, setLoading] = useState(true);
    const [error, setError] = useState('')

    useEffect(() => {
        const checkAuth  = async () => {
            try {
                const userData = await getMe();
                setUser(userData.currentUser);
            } catch (error) {
                setUser(null);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    const value = {
        user,
        setUser,
        isloading,
        setLoading,
        error,
        setError,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;