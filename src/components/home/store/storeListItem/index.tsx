import { FC } from "react";

interface StoreListItemProps {
  store: string;
}

const StoreListItem: FC<StoreListItemProps> = ({ store }) => {
  return <li>{store}</li>;
};

export default StoreListItem;
