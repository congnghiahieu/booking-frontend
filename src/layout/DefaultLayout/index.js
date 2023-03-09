import { Outlet } from "react-router-dom";
import { DefaultHeader, DefaultFooter } from "../../components";
import style from "./DefaultLayout.module.css";

const DefaultLayout = () => {
  return (
    <>
      <DefaultHeader />
      <div className={style.content}>
        <Outlet />
      </div>
      <DefaultFooter />
    </>
  );
};

export default DefaultLayout;
