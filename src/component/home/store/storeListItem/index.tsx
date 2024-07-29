import { FC } from "react";
import { useDisclosure } from "@chakra-ui/react";
import DrawerCom from "@component/drawer";
import { StoreListItemLi } from "./styles";
import StoreCard from "@component/storeCard/sotreCard";

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
      {
        <DrawerCom
          isOpen={isOpen}
          onClose={onClose}
          size="full"
          heading="A매장"
        >
          <div>
            <div>주문 건수</div>
            <div>메뉴 건수</div>
          </div>
        </DrawerCom>
      }
    </>
  );
};

export default StoreListItem;
