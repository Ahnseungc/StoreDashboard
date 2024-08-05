import { FC, useEffect, useState } from "react";
import { Heading, useDisclosure, Text } from "@chakra-ui/react";
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

  return (
    <>
      <DrawerCom
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
        heading={`${store.store} 매장`}
      >
        {storeData && (
          <>
            <div style={{ display: "flex" }}>
              <div>
                <Heading style={{ fontSize: "1.5rem" }}>주문 건수</Heading>
                <h4>{store.order}건</h4>
              </div>
              <div>
                <Heading style={{ fontSize: "1.5rem" }}>메뉴 건수</Heading>
                <h4>{store.order}건</h4>
              </div>
              <div>
                <Heading style={{ fontSize: "1.5rem" }}>
                  주문이 많은 플랫폼
                </Heading>
                <h4>{store.maxPlatform}</h4>
              </div>
            </div>
            {/* <div style={{ display: "flex" }}>
          {storeData[0]?.popularOrderMenu?.map((menu, index) => {
            return (
              <span>
                <h4>{index + 1}등</h4>
                <Text>{menu.name}</Text>
              </span>
            );
          })}
        </div> */}
            <div style={{ width: "50vw", height: "40vh" }}>
              <Heading style={{ fontSize: "1.5rem" }}>인기 메뉴</Heading>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={storeData[0]?.popularOrderMenu}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />

                  <Bar
                    dataKey="value"
                    fill="#82ca9d"
                    // activeBar={<Rectangle fill="gold" stroke="purple" />}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <Text>
              피크 시간대(그래프){`${store.maxTime[0]}~${store.maxTime[1]}`}
            </Text>
          </>
        )}
      </DrawerCom>
    </>
  );
};

export default StoreListDrawer;
