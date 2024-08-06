import { FC, useEffect, useState } from "react";
import {
  Heading,
  useDisclosure,
  Highlight,
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

  console.log(storeData[0]);
  console.log(storeData[0]?.timeHighOrder);

  return (
    <>
      <DrawerCom
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
        heading={`${store.store} 매장`}
      >
        {store.lowOrder === store.order && (
          <Badge colorScheme="red">낮은 주문건수를 기록하고 있어요!</Badge>
        )}
        {store.highOrder === store.order && (
          <Badge colorScheme="blue">
            <p>높은 주문건수를 기록하고 있어요!</p>
          </Badge>
        )}
        {storeData && (
          <div style={{ padding: "1rem" }}>
            <div>
              <Heading style={{ fontSize: "1.2rem", marginBottom: "4rem" }}>
                <Highlight
                  query={`${store.maxTime[0]}시 ~ ${store.maxTime[1]}시`}
                  styles={{ px: "2", py: "1", bg: "orange.100", rounded: "xl" }}
                >
                  {`${store.maxTime[0]}시 ~ ${store.maxTime[1]}시의`}
                </Highlight>
                <Highlight
                  query={`${storeData[0]?.timeHighOrder}`}
                  styles={{
                    px: "2",
                    py: "1",
                    bg: "blue.100",
                    ml: "0.5rem",
                    rounded: "xl",
                  }}
                >
                  {`${storeData[0]?.timeHighOrder}건 으로 가장 많습니다.`}
                </Highlight>
              </Heading>
              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                <div>
                  <Heading style={{ fontSize: "1.5rem" }}>주문 건수</Heading>

                  <TableContainer mt="1rem">
                    <Table variant="striped" colorScheme="pink">
                      <Tbody>
                        {storeData[0]?.dailyOrderCount?.map((data, index) => {
                          return (
                            <Tr style={{ marginTop: "0.5rem" }}>
                              <Td>
                                <Text>{index + 1}</Text>
                              </Td>
                              <Td>
                                <Text fontWeight="bold">{data.date}</Text>
                              </Td>
                              <Td>
                                <Text>{data.order}건</Text>
                              </Td>
                            </Tr>
                          );
                        })}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </div>
                <div>
                  <Heading style={{ fontSize: "1.5rem" }}>
                    주문 메뉴 건수
                  </Heading>

                  <TableContainer mt="1rem">
                    <Table
                      // variant="simple"
                      variant="striped"
                      colorScheme="orange"
                    >
                      <Tbody>
                        {storeData[0]?.dailyDetailOrder?.map((day, index) => {
                          return (
                            <Tr style={{ marginTop: "0.5rem" }}>
                              <Td>
                                <Text>{index + 1}등</Text>
                              </Td>
                              <Td>
                                <Text fontWeight="bold">{day.date}</Text>
                              </Td>
                              <Td>
                                <Text>{day.order}건</Text>
                              </Td>
                            </Tr>
                          );
                        })}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </div>

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
          </div>
        )}
      </DrawerCom>
    </>
  );
};

export default StoreListDrawer;
