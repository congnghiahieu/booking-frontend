import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRefreshMutation } from '../../app/features/auth/authApiSlice';
import useLocalCheckbox from '../../hooks/useLocalCheckbox';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../app/features/auth/authSlice';
import LoadingLogin from '../Loading/LoadingLogin';

const PersistLogin = () => {
  const navigate = useNavigate();
  const [persist] = useLocalCheckbox('persist-login', false);
  const token = useSelector(selectCurrentToken);
  const [refresh, { isLoading, isSuccess }] = useRefreshMutation();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      // console.log('verifying refresh token');
      try {
        //const response =
        await refresh().unwrap();
      } catch (err) {
        navigate('/login');
      }
    };

    if (!token && persist) verifyRefreshToken();
    // eslint-disable-next-line
  }, []);

  let content;
  if (!persist) {
    content = <Outlet />;
  } else if (isLoading) {
    content = <LoadingLogin />;
  } else if (!isLoading && isSuccess) {
    content = <Outlet />;
  }

  return content;
};

export default PersistLogin;
