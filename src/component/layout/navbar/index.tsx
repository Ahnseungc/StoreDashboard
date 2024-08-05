import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { NavbarLayout } from "./styles";
import { FC } from "react";

interface StoreList {
  id: string;
  name: string;
}

interface NavBarProps {
  onChange: (index: number) => void;
  storeList: Array<StoreList>;
  selectedTab: number;
}

const Navbar: FC<NavBarProps> = ({ storeList, onChange, selectedTab }) => {
  return (
    <NavbarLayout>
      <Tabs variant="enclosed" index={selectedTab} onChange={onChange}>
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
