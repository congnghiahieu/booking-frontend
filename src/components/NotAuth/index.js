import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../app/features/auth/authSlice';

const NotAuth = () => {
  const location = useLocation();
  const token = useSelector(selectCurrentToken);

  const content = !token ? <Outlet /> : <Navigate to='/' state={{ from: location }} replace />;

  return content;
};

export default NotAuth;
