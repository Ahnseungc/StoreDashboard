import { Outlet, useLocation } from "react-router-dom";
import { DefaultLayout, DefaultLayoutHeader } from "./styes";
import { FC } from "react";
import Sidebar from "@component/layout/sidebar";
import { Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "@component/layout/navbar";

const Layout: FC = () => {
  const [title, setTitle] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    pathname === "/" && setTitle("관리 매장");
    pathname === "/store" && setTitle("매장 별");
    pathname === "/day" && setTitle("일 별");
  }, [pathname]);

  return (
    <DefaultLayout>
      <DefaultLayoutHeader>
        <Sidebar />
        {!pathname.includes("/store") && (
          <Heading style={{ fontSize: "1.8rem" }}>{title}</Heading>
        )}
        {pathname.includes("/store") && <Navbar />}
      </DefaultLayoutHeader>
      <Outlet />
    </DefaultLayout>
  );
};

export default Layout;
