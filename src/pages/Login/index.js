import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h2>Login</h2>
      <form
        style={{
          width: "20%",
          display: "flex",
          flexDirection: "column",
        }}>
        <label htmlFor='account'>Account</label>
        <input id='account' type='text' />

        <label htmlFor='password'>Password</label>
        <input id='password' type='password' />

        <button>Login</button>
      </form>
      <div>
        <p>Need an Account ?</p>
        <Link to='/register'>Register new Account</Link>
      </div>
    </>
  );
};

export default Login;
