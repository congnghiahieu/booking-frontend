import style from "./GoogleIcon.module.css";

function GoogleIcon() {
  return (
    <div className={style.GoogleIcon}>
      <div className={style.logo}>
        <div className={style.circle}></div>
        <div className={style.bar}></div>
        <div className={style.colors}></div>
      </div>
    </div>
  );
}

export default GoogleIcon;
