import { FC } from "react";
import StoreListItem from "../storeListItem";
import { DepartmentUl } from "./styles";

interface StoreListProps {
  stores: Array<any>;
}

const StoreList: FC<StoreListProps> = ({ stores }) => {
  return (
    <DepartmentUl>
      {stores.map((store) => {
        return <StoreListItem store={store} />;
      })}
    </DepartmentUl>
  );
};

export default StoreList;
