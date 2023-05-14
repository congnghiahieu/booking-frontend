import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../app/features/auth/authSlice';

const RequireAuth = () => {
  const location = useLocation();
  const token = useSelector(selectCurrentToken);

  const content = token ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />;

  return content;
};
export default RequireAuth;
