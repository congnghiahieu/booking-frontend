import { Outlet } from "react-router-dom";
import { DefaultHeader, DefaultFooter } from "../../components";

const DefaultLayout = () => {
  return (
    <>
      <DefaultHeader />
      <Outlet />
      <DefaultFooter />
    </>
  );
};

export default DefaultLayout;
