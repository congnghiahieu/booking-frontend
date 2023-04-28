import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useRegisterMutation } from '../../app/features/auth/authApiSlice';
import useTitle from '../../hooks/useTitle';
import { Loading } from '../../components';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  useTitle('Register');

  const navigate = useNavigate();
  const userRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [regisErr, setRegisErr] = useState('');

  const [regis, { isLoading }] = useRegisterMutation();
  const canRegis = validName && validMatch && !isLoading;

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setRegisErr('');
  }, [user, pwd, matchPwd]);

  const onRegis = async e => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      return;
    }
    try {
      await regis({ user, pwd }).unwrap();
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
    <div className='regis-form'>
      {isLoading && <Loading />}
      {regisErr && <p>{regisErr}</p>}
      <h2>Register</h2>
      <form
        style={{
          width: '20%',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <label htmlFor='account'>Account</label>
        <input id='account' type='text' ref={userRef} />

        <label htmlFor='password'>Password</label>
        <input id='password' type='password' />

        <label htmlFor='confirm'>Confirm Password</label>
        <input id='confirm' type='password' />

        <button disabled={!canRegis}>Register</button>
      </form>
      <div>
        <p>Already registered ?</p>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default Register;
