import { FC } from "react";
import StoreListItem from "../storeListItem";

interface StoreListProps {
  stores: Array<string>;
}

const StoreList: FC<StoreListProps> = ({ stores }) => {
  return (
    <ul>
      {stores.map((store) => {
        return <StoreListItem store={store} />;
      })}
    </ul>
  );
};

export default StoreList;
