import { FC, useEffect, useState } from "react";
import { Heading, useDisclosure, Text } from "@chakra-ui/react";
import DrawerCom from "@component/drawer";
import { RenewData } from "@utils/dataPreprocessing";

interface StoreListDrawerProps {
  store: any;
  isOpen: boolean;
  onClose: () => void;
}

const StoreListDrawer: FC<StoreListDrawerProps> = ({
  store,
  isOpen,
  onClose,
}) => {
  const [storeData, setStoreData] = useState<any>([]);
  const data = async () => {
    setStoreData((await RenewData()).AStoreData());
    return (await RenewData()).AStoreData();
  };

  useEffect(() => {
    data();
  }, []);
  console.log(store);

  return (
    <>
      <DrawerCom
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
        heading={store.store}
      >
        <div>
          <Text>주문 건수</Text>
          <h4>{store.order}건</h4>
        </div>
        <div>
          <Text>메뉴 주문 건수</Text>
          <h4>{store.order}건</h4>
        </div>
        <Text>인기 메뉴</Text>
        {storeData[0]?.popularOrderMenu?.map((menu, index) => {
          return (
            <span>
              <h4>{index + 1}등</h4>
              <Text>{menu.name}</Text>
            </span>
          );
        })}

        <Text>
          피크 시간대(그래프){`${store.maxTime[0]}~${store.maxTime[1]}`}
        </Text>
      </DrawerCom>
    </>
  );
};

export default StoreListDrawer;
