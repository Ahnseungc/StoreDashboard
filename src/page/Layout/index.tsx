import { Outlet, useLocation } from "react-router-dom";
import { DefaultLayout, DefaultLayoutHeader } from "./styes";
import { FC } from "react";
import Sidebar from "@component/sidebar";
import { Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";

const Layout: FC = () => {
  const [title, setTitle] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    pathname === "/" && setTitle("관리하고 있는 매장");
    pathname === "/store" && setTitle("매장 별");
    pathname === "/day" && setTitle("날짜 별");
  }, [pathname]);

  return (
    <DefaultLayout>
      <DefaultLayoutHeader>
        <Sidebar />
        <Heading style={{ fontSize: "1.8rem" }}>{title}</Heading>
      </DefaultLayoutHeader>
      <Outlet />
    </DefaultLayout>
  );
};

export default Layout;
