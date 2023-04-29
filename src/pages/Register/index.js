import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useRegisterMutation } from '../../app/features/auth/authApiSlice';
import useTitle from '../../hooks/useTitle';
import { Loading } from '../../components';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  useTitle('Register');

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
  const [success, setSuccess] = useState(false);

  const [regis, { isLoading }] = useRegisterMutation();
  const canRegis = validName && validPwd && validMatch && !isLoading;

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
      setRegisErr('Invalid Entry');
      return;
    }
    try {
      await regis({ username: user, password: pwd }).unwrap();
      setSuccess(true);
      setUser('');
      setPwd('');
      setMatchPwd('');
    } catch (err) {
      if (!err.status) {
        setRegisErr('No Server Response');
      } else if (err.status === 400) {
        setRegisErr('Missing Username or Password');
      } else if (err.status === 409) {
        setRegisErr('Username Taken');
      } else {
        setRegisErr(err.data?.message);
      }
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Đăng kí tài khoản thành công</h1>
          <p>
            <Link to='/login'>Chuyển tới trang đăng nhập</Link>
          </p>
        </section>
      ) : (
        <div className='form-container'>
          {isLoading && <Loading />}
          {regisErr && <p>{regisErr}</p>}
          <h2>Register</h2>

          <form className='form'>
            <div className='form-group'>
              <label htmlFor='account'>
                Username:
                <FontAwesomeIcon icon={faCheck} className={validName ? 'valid' : 'hide'} />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validName || !user ? 'hide' : 'invalid'}
                />
              </label>
              <input
                id='account'
                type='text'
                ref={userRef}
                autoComplete='off'
                onChange={e => setUser(e.target.value)}
                value={user}
                required
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              {/* Validation message */}
              {/* TODO: Cần CSS */}
              <p
                id='uidnote'
                className={userFocus && user && !validName ? 'instructions' : 'offscreen'}>
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
            </div>

            <div className='form-group'>
              <label htmlFor='password'>
                Password:
                <FontAwesomeIcon icon={faCheck} className={validPwd ? 'valid' : 'hide'} />
                <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? 'hide' : 'invalid'} />
              </label>
              <input
                id='password'
                type='password'
                onChange={e => setPwd(e.target.value)}
                value={pwd}
                required
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <p id='pwdnote' className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a special character.
                <br />
                Allowed special characters: <span aria-label='exclamation mark'>!</span>{' '}
                <span aria-label='at symbol'>@</span> <span aria-label='hashtag'>#</span>{' '}
                <span aria-label='dollar sign'>$</span> <span aria-label='percent'>%</span>
              </p>
            </div>

            <div className='form-group'>
              <label htmlFor='confirm'>
                Confirm Password:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validMatch && matchPwd ? 'valid' : 'hide'}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validMatch || !matchPwd ? 'hide' : 'invalid'}
                />
              </label>
              <input
                id='confirm'
                type='password'
                onChange={e => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p
                id='confirmnote'
                className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </p>
            </div>

            {/* TODO: CSS cả lúc button bị disabled */}
            <div className='form-group'>
              <button disabled={!canRegis} onClick={onRegis}>
                Register
              </button>
            </div>
          </form>

          <div className='form-redirect'>
            <p>Already registered ?</p>
            <Link to='/login'>Login</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
