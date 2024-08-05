import { FC } from "react";
import { RenewData } from "@utils/dataPreprocessing";
import StoreList from "@component/home/store/storeList";
import { HomeSection } from "./style";
import { useState } from "react";
import { useEffect, createContext } from "react";

const OrderState = createContext({ state: false });

const Home: FC = () => {
  const [storeData, setStoreData] = useState([]);
  const data = async () => {
    setStoreData((await RenewData()).ReturnOrderSum());
    return (await RenewData()).ReturnOrderSum();
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <HomeSection>
      <StoreList stores={storeData} />
    </HomeSection>
  );
};

export default Home;
