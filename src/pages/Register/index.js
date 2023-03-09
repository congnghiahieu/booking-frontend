import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <h2>Register</h2>
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

        <label htmlFor='confirm'>Confirm Password</label>
        <input id='confirm' type='password' />

        <button>Register</button>
      </form>
      <div>
        <p>Already registered ?</p>
        <Link to='/login'>Login</Link>
      </div>
    </>
  );
};

export default Register;
