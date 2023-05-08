import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useRegisterMutation } from "../../app/features/auth/authApiSlice";
import useTitle from "../../hooks/useTitle";
import { Loading, GoogleIcon } from "../../components";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  useTitle("Register");

  const navigate = useNavigate();
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [regisErr, setRegisErr] = useState("");
  const [success, setSuccess] = useState(false);

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
    setRegisErr("");
  }, [user, pwd, matchPwd]);

  const onRegis = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setRegisErr("Invalid Entry");
      return;
    }
    try {
      await regis({ user, pwd }).unwrap();
      setSuccess(true);
      setUser("");
      setPwd("");
      setMatchPwd("");
      // navigate('/login');
    } catch (err) {
      if (!err.status) {
        setRegisErr("No Server Response");
      } else if (err.status === 400) {
        setRegisErr("Missing Username or Password");
      } else if (err.status === 401) {
        setRegisErr("Unauthorized");
      } else {
        setRegisErr(err.data?.message);
      }
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <Link to="/login">Sign in</Link>
          </p>
        </section>
      ) : (
        <div className="form-container">
          {isLoading && <Loading />}
          {regisErr && <p>{regisErr}</p>}
          <h2>Register</h2>
          <form className="form">
            <div className="form-group">
              <label htmlFor="account">Tên Đăng Nhập</label>
              <input
                placeholder="Email"
                id="account"
                type="text"
                ref={userRef}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mật Khẩu</label>
              <input placeholder="Password" id="password" type="password" />
            </div>
            <div className="form-group">
              <label htmlFor="confirm">Xác Nhận Mật Khẩu</label>
              <input
                placeholder="Confirm Password"
                id="confirm"
                type="password"
              />
            </div>
            <div className="form-group">
              <button disabled={!canRegis} onClick={onRegis}>
                Register
              </button>
            </div>
          </form>
          <div className="form-redirect">
            <p>Already registered ?</p>
            <Link to="/login">Login</Link>
          </div>
          <div className="Google_login">
            <span className="Google_Icon">
              <div className="G_icon">
                <GoogleIcon />
              </div>
              Google
            </span>
          </div>
          <div className="HadAccount">
            <p>Bạn đã có tài khoản?</p>
            <Link to="/login">Đăng nhập</Link>
          </div>
          <div className="license">
            Khi đăng nhập, tôi đồng ý với các Điều khoản sử dụng và Chính sách
            bảo mật của Agoda.
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
