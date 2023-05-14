import style from './LoadingLogin.module.css';

const LoadingLogin = () => {
  return (
    <div className={style.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingLogin;
