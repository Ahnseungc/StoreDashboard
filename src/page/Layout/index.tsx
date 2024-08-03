import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { DefaultLayout, DefaultLayoutHeader } from "./styes";
import { FC } from "react";
import Sidebar from "@component/layout/sidebar";
import { Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "@component/layout/navbar";

const storeList = [
  { id: "A", name: "A매장" },
  { id: "B", name: "B매장" },
  { id: "C", name: "C매장" },
  { id: "D", name: "D매장" },
];

const Layout: FC = () => {
  const [title, setTitle] = useState("");
  const { pathname } = useLocation();
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const onChangeStoreTab = (index: number) => {
    setSelectedTab(index);
    navigate(`/store/${storeList[index].id}`);
  };

  const onChangeDayTab = (index: number) => {
    setSelectedTab(index);
    navigate(`/day/${storeList[index].id}`);
  };

  useEffect(() => {
    pathname === "/" && setTitle("관리 매장");
    pathname === "/store" && setTitle("매장 별");
    pathname === "/day" && setTitle("일 별");
  }, [pathname]);

  return (
    <DefaultLayout>
      <DefaultLayoutHeader>
        <Sidebar />
        {/* {!pathname.includes("/store") ||
          (!pathname.includes("/day") && (
            <Heading style={{ fontSize: "1.8rem" }}>{title}</Heading>
          ))} */}
        {pathname.includes("/store") && (
          <Navbar
            storeList={storeList}
            onChange={onChangeStoreTab}
            selectedTab={selectedTab}
          />
        )}
        {pathname.includes("/day") && (
          <Navbar
            storeList={storeList}
            onChange={onChangeDayTab}
            selectedTab={selectedTab}
          />
        )}
      </DefaultLayoutHeader>
      <Outlet />
    </DefaultLayout>
  );
};

export default Layout;
