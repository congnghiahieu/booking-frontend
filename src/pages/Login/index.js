import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../app/features/auth/authSlice';
import { useLoginMutation } from '../../app/features/auth/authApiSlice';
import useLocalCheckbox from '../../hooks/useLocalCheckbox';
import useLocalInput from '../../hooks/useLocalInput';
import useTitle from '../../hooks/useTitle';
import { Loading, GoogleIcon } from '../../components';
import { GOOGLE_AUTH_LINK } from '../../utils/constants';

const Login = () => {
  useTitle('Login');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const usernameRef = useRef(null);

  const [username, attrs, reset] = useLocalInput('username', '');
  const [password, setPassword] = useState('');
  const [persist, toggle] = useLocalCheckbox('persist-login', false);

  const [loginErr, setLoginErr] = useState('');

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    setLoginErr('');
  }, [username, password]);

  const canLogin = username && password && !isLoading;

  const onLogin = async e => {
    e.preventDefault();
    try {
      const { accessToken } = await login({ username, password }).unwrap();
      dispatch(setCredentials({ accessToken }));
      reset();
      setPassword();
      navigate(from, { replace: true });
    } catch (err) {
      if (!err.status) {
        setLoginErr('No Server Response');
      } else if (err.status === 400) {
        setLoginErr('Missing Username or Password');
      } else if (err.status === 401) {
        setLoginErr('Unauthorized');
      } else {
        setLoginErr(err.data?.message);
      }
    }
  };

  const onGoogleLogin = async () => {
    window.open(GOOGLE_AUTH_LINK, '_self');
  };

  return (
    <div className='form-container'>
      {isLoading && <Loading />}
      {loginErr && <p>{loginErr}</p>}
      <h2>Login</h2>
      <form className='form'>
        <div className='form-group'>
          <label htmlFor='account'>Tên đăng nhập</label>
          <input placeholder='Email' id='account' type='text' ref={usernameRef} {...attrs} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Mật Khẩu</label>
          <input
            id='password'
            type='password'
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className='form-group-hor'>
          <label htmlFor='persist'>Keep login session</label>
          <input id='persist' type='checkbox' checked={persist} onChange={toggle} />
        </div>
        <div className='form-group'>
          <button disabled={!canLogin} onClick={onLogin}>
            Đăng nhập
          </button>
        </div>
      </form>
      <div className='form-redirect'>
        <p>Need an Account ?</p>
        <Link to='/register'>Register new Account</Link>
      </div>
      <div className='Google_login' onClick={onGoogleLogin}>
        <span className='Google_Icon'>
          <div className='G_icon'>
            <GoogleIcon />
          </div>
          Google
        </span>
      </div>
      <div className='license'>
        Khi đăng nhập, tôi đồng ý với các Điều khoản sử dụng và Chính sách bảo mật của Wygo.
      </div>
    </div>
  );
};

export default Login;
