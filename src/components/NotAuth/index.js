import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../app/features/auth/authSlice';

const NotAuth = () => {
  const location = useLocation();
  const token = useSelector(selectCurrentToken);
  console.log(token);

  return !token ? <Outlet /> : <Navigate to='/' state={{ from: location }} replace />;
};

export default NotAuth;
