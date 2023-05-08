import { Loading } from '../../components';
import { useEffect } from 'react';
import { useRefreshMutation } from '../../app/features/auth/authApiSlice';
import { useNavigate } from 'react-router-dom';

const LoginSuccess = () => {
  const navigate = useNavigate();
  const [refresh] = useRefreshMutation();

  useEffect(() => {
    const refreshToken = async () => {
      console.log('Refresh token');
      await refresh().unwrap();
      navigate('/');
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
