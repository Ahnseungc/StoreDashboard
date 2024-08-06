import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { RenewData } from "@utils/dataPreprocessing";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface StoreData {
  store: string;
  data: any;
}

const Day = () => {
  const [storeDataAll, setStoreDataAll] = useState<StoreData[]>();
  const [storeData, setStoreData] = useState<StoreData>();
  const [storeName, setStoreName] = useState<string>("A매장");
  const [color, setColor] = useState<string>("#8884d8");
  const [title, setTitle] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const colorList = [
    { store: "A", color: "#8884d8" },
    { store: "B", color: "#82ca9d" },
    { store: "C", color: "#ffc658" },
    { store: "D", color: "#d884ab" },
  ];
  const data = async () => {
    setStoreDataAll((await RenewData()).DailyDataAll());
    setStoreData((await RenewData()).DailyDataAll()[0]);
    return (await RenewData()).DailyDataAll();
  };
  const { pathname } = useLocation();

  useEffect(() => {
    data();
  }, []);

  useEffect(() => {
    storeDataAll?.find((store) => {
      if (pathname.includes(store.store)) {
        setStoreData(store);
        setStoreName(store.store);
      }
    });
    colorList.find((color) => {
      storeName === color.store && setColor(color.color);
    });
  }, [pathname, storeName]);

  // console.log(storeData);

  const handleClick = (data, index) => {
    onOpen();
    setTitle(index.value.data.date);
  };

  return (
    <>
      <div style={{ height: "100vh", padding: "3rem" }}>
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart
            width={500}
            height={400}
            data={storeData?.data.DailyOrderSum}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="주문"
              stackId="1"
              stroke={color}
              fill={color}
              activeDot={{ onClick: handleClick }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{title} 주문 현황</DrawerHeader>

          <DrawerBody>
            <Input />
            {storeData?.data?.DailyOrderSum?.map((day) => {
              const keys = Object.keys(day.orderList);

              return keys.map((key, index) => {
                const item = day.orderList[key];
                return (
                  <div>
                    <span>{key}</span>
                    <span>{item}</span>
                  </div>
                );
              });
            })}
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Day;
