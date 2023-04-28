import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../app/features/auth/authSlice';
import { useLoginMutation } from '../../app/features/auth/authApiSlice';
import useLocalCheckbox from '../../hooks/useLocalCheckbox';
import useLocalInput from '../../hooks/useLocalInput';
import useTitle from '../../hooks/useTitle';
import { Loading } from '../../components';

const Login = () => {
  useTitle('Login');

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      // navigate('/dash');
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

  return (
    <div className='form-container'>
      {isLoading && <Loading />}
      {loginErr && <p>{loginErr}</p>}
      <h2>Login</h2>
      <form className='form'>
        <div className='form-group'>
          <label htmlFor='account'>Account</label>
          <input id='account' type='text' ref={usernameRef} {...attrs} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' onChange={e => setPassword(e.target.value)} />
        </div>
        <div className='form-group-hor'>
          <label htmlFor='persist'>Keep login session</label>
          <input id='persist' type='checkbox' checked={persist} onChange={toggle} />
        </div>
        <div className='form-group'>
          <button disabled={!canLogin} onClick={onLogin}>
            Login
          </button>
        </div>
      </form>
      <div className='form-redirect'>
        <p>Need an Account ?</p>
        <Link to='/register'>Register new Account</Link>
      </div>
    </div>
  );
};

export default Login;
