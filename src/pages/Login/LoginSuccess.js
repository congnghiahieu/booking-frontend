import { Loading } from '../../components';
import { useEffect } from 'react';
import { useRefreshMutation } from '../../app/features/auth/authApiSlice';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginSuccess = () => {
  const navigate = useNavigate();
  const [refresh] = useRefreshMutation();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    const refreshToken = async () => {
      console.log('Refresh token');
      await refresh().unwrap();
      navigate(from, { replace: true });
    };
    refreshToken();
  }, []);

  return (
    <div>
      <Loading />
    </div>
  );
};

export default LoginSuccess;
