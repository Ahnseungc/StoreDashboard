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
    storeDataAll?.map((store) => {
      pathname.includes(store.store) && setStoreData(store);
    });
    console.log(storeData);
  }, [pathname]);

  return (
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
            stroke="#8884d8"
            fill="#8884d8"
          />
          {/* <Area
            type="monotone"
            dataKey="B매장"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="C매장"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          /> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Day;
