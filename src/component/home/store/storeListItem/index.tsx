import { FC } from "react";
import { Heading, useDisclosure, Text } from "@chakra-ui/react";
import DrawerCom from "@component/drawer";
import { StoreListItemLi } from "./styles";
import StoreCard from "@component/storeCard/sotreCard";
import StoreListDrawer from "../storeListDrawer";

interface StoreListItemProps {
  store: any;
}

const StoreListItem: FC<StoreListItemProps> = ({ store }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <StoreListItemLi>
        <StoreCard store={store} button={true} onOpen={onOpen} />
      </StoreListItemLi>
      <StoreListDrawer store={store} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default StoreListItem;
