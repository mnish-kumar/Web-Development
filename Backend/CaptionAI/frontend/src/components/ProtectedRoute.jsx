import { Navigate } from 'react-router-dom'
import { useAuth } from '../auth/hooks/use.auth'


const ProtectedRoute = ({ children }) => {
  const { user, isloading } = useAuth();

  if (isloading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute
