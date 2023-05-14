import { useEffect } from 'react';
import { useRefreshMutation } from '../../app/features/auth/authApiSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const LoginSuccess = () => {
  useTitle('Wygo.com | Đang đăng nhập');
  const navigate = useNavigate();

  const [refresh] = useRefreshMutation();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    const refreshToken = async () => {
      await refresh().unwrap();
      navigate(from, { replace: true });
    };
    refreshToken();
    // eslint-disable-next-line
  }, []);

  return <div>Loading...</div>;
};

export default LoginSuccess;
