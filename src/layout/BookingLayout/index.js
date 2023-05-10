import { Outlet } from "react-router-dom";
import { DefaultFooter } from "../../components";
import style from "./BookingLayout.module.css";

const BookingLayout = () => {
  return (
    <>
      {/* <DefaultHeader /> */}
      <div className={style.content}>
        <Outlet />
      </div>
      <DefaultFooter />
    </>
  );
};

export default BookingLayout;
