import { FC } from "react";
import { RenewData } from "@utils/dataPreprocessing";
import StoreList from "src/component/home/store/storeList";
import { HomeSection } from "./style";

const Home: FC = () => {
  const storeList = ["A매장", "B매장", "C매장", "D매장"];
  return (
    <HomeSection>
      <StoreList stores={storeList} />
    </HomeSection>
  );
};

export default Home;
