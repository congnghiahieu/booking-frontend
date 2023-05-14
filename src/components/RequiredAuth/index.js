import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../app/features/auth/authSlice';

const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation();
  const { roles } = useSelector(selectUserInfo);

  const content = roles.some(role => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );

  return content;
};
export default RequireAuth;
