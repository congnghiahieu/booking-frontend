import { useEffect } from 'react';
import { useRefreshMutation } from '../../app/features/auth/authApiSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import LoadingLogin from '../../components/Loading/LoadingLogin';

const LoginSuccess = () => {
  useTitle('Wygo.com | Đang đăng nhập');
  const navigate = useNavigate();

  const [refresh] = useRefreshMutation();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    const refreshToken = async () => {
      await refresh().unwrap();
      localStorage.setItem('persist-login', JSON.stringify(true));
      navigate(from, { replace: true });
    };
    refreshToken();
    // eslint-disable-next-line
  }, []);

  return <LoadingLogin />;
};

export default LoginSuccess;
