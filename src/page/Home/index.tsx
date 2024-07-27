import { FC } from "react";
import { RenewData } from "@utils/dataPreprocessing";
import StoreList from "src/components/home/store/storeList";

const Home: FC = () => {
  const storeList = ["A매장", "B매장", "C매장", "D매장"];
  return (
    <section>
      <StoreList stores={storeList} />
    </section>
  );
};

export default Home;
