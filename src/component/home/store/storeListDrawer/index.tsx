import { FC, useEffect, useState } from "react";
import {
  Heading,
  useDisclosure,
  Text,
  Badge,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";
import DrawerCom from "@component/drawer";
import { RenewData } from "@utils/dataPreprocessing";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { StoreListItemHighOrderLayout } from "../storeListItem/styles";
import { StoreListItemLowderLayout } from "@component/storeCard/styles";

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
  const dataA = async () => {
    setStoreData((await RenewData()).storeData({ type: "A" }));
    return (await RenewData()).storeData({ type: "A" });
  };
  const dataB = async () => {
    setStoreData((await RenewData()).storeData({ type: "B" }));
    return (await RenewData()).storeData({ type: "B" });
  };
  const dataC = async () => {
    setStoreData((await RenewData()).storeData({ type: "C" }));
    return (await RenewData()).storeData({ type: "C" });
  };
  const dataD = async () => {
    setStoreData((await RenewData()).storeData({ type: "D" }));
    return (await RenewData()).storeData({ type: "D" });
  };

  useEffect(() => {
    store.store === "A" && dataA();
    store.store === "B" && dataB();
    store.store === "C" && dataC();
    store.store === "D" && dataD();
  }, [store]);

  console.log(storeData);
  console.log(store);

  return (
    <>
      <DrawerCom
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
        heading={`${store.store} 매장`}
      >
        {storeData && (
          <div style={{ padding: "1rem" }}>
            {store.lowOrder === store.order && (
              <Badge colorScheme="red">낮은 주문건수를 기록하고 있어요!</Badge>
            )}
            {store.highOrder === store.order && (
              <Badge colorScheme="blue">
                <p>높은 주문건수를 기록하고 있어요!</p>
              </Badge>
            )}
            <div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  gap: "5rem",
                  marginTop: "2rem",
                }}
              >
                <div>
                  <Heading style={{ fontSize: "1.5rem" }}>주문 건수</Heading>
                  <h4>{store.order}건</h4>
                </div>
                <div>
                  <Heading style={{ fontSize: "1.5rem" }}>
                    주문 메뉴 건수
                  </Heading>
                  <h4>{store.order}건</h4>
                </div>
              </div>
              <div
                style={{
                  marginTop: "5rem",
                  display: "flex",
                  width: "100%",
                  gap: "5rem",
                }}
              >
                <div>
                  <Heading style={{ fontSize: "1.5rem" }}>
                    인기 많은 플랫폼
                  </Heading>

                  <TableContainer mt="1rem">
                    <Table
                      // variant="simple"
                      variant="striped"
                      colorScheme="teal"
                    >
                      <Tbody>
                        {storeData[0]?.PlatformData?.map((menu, index) => {
                          return (
                            <Tr style={{ marginTop: "0.5rem" }}>
                              <Td>
                                <Text>{index + 1}등</Text>
                              </Td>
                              <Td>
                                <Text fontWeight="bold">{menu.name}</Text>
                              </Td>
                              <Td>
                                <Text>{menu.value}건</Text>
                              </Td>
                            </Tr>
                          );
                        })}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </div>
                <div>
                  <Heading style={{ fontSize: "1.5rem" }}>인기 메뉴</Heading>
                  <TableContainer mt="1rem">
                    <Table variant="striped" colorScheme="blue">
                      <Tbody>
                        {storeData[0]?.popularOrderMenu?.map((menu, index) => {
                          return (
                            <Tr style={{ marginTop: "0.5rem" }}>
                              <Td>
                                <Text>{index + 1}등</Text>
                              </Td>
                              <Td>
                                <Text fontWeight="bold">{menu.name}</Text>
                              </Td>
                              <Td>
                                <Text>{menu.value}건</Text>
                              </Td>
                            </Tr>
                          );
                        })}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </div>
            <Heading style={{ fontSize: "1.5rem", marginTop: "2rem" }}>
              주문 많은 시간대
            </Heading>
            <div>{`${store.maxTime[0]}시 ~ ${store.maxTime[1]}시`}</div>
          </div>
        )}
      </DrawerCom>
    </>
  );
};

export default StoreListDrawer;
