import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { NavbarLayout } from "./styles";
import { useEffect, useState } from "react";
import { RenewData } from "@utils/dataPreprocessing";
import StorePage from "@page/Store";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const storeList = [
    { id: "A", name: "A매장" },
    { id: "B", name: "B매장" },
    { id: "C", name: "C매장" },
    { id: "D", name: "D매장" },
  ];
  const initialTabIndex = storeList.findIndex(
    (store) => `/store/${store.id}` === location.pathname
  );

  const [selectedTab, setSelectedTab] = useState(
    initialTabIndex === -1 ? 0 : initialTabIndex
  );

  const onChangeTab = (index: number) => {
    setSelectedTab(index);
    navigate(`/store/${storeList[index].id}`);
  };
  return (
    <NavbarLayout>
      <Tabs variant="enclosed" index={selectedTab} onChange={onChangeTab}>
        <TabList>
          {storeList.map((store) => {
            return <Tab key={store.id}>{store.name}</Tab>;
          })}
        </TabList>
      </Tabs>
    </NavbarLayout>
  );
};

export default Navbar;
