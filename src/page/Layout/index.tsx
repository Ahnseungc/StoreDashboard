import { Outlet } from "react-router-dom";
import { DefaultLayout } from "./styes";
import { FC } from "react";
import Sidebar from "@component/sidebar";

const Layout: FC = () => {
  return (
    <DefaultLayout>
      <Sidebar />
      <Outlet />
    </DefaultLayout>
  );
};

export default Layout;
