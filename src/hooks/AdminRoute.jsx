// routes/AdminRoute.jsx
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useUserRole from './userUseRole';


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const { role, roleLoading } = useUserRole()

    if (loading || roleLoading) {
        return <span className='loading loading-spinner loading-xl'></span>;
    }

    if (!user || role !== 'admin') {
        return <Navigate state={{ from: location.pathname }} to="/forbiden"></Navigate>
    }


    return children;
};

export default AdminRoute;
