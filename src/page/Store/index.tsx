import { Text, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { StoreLayout } from "./styles";
import { useEffect, useState } from "react";
import { RenewData } from "@utils/dataPreprocessing";
import StoreCard from "@component/storeCard/sotreCard";
import { FC } from "react";
import { useLocation } from "react-router-dom";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const data1 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

interface StorePagePros {
  // storeName: string;
}
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const StorePage: FC<StorePagePros> = ({}) => {
  const { pathname } = useLocation();
  const [storeData, setStoreData] = useState([]);
  const dataA = async () => {
    setStoreData((await RenewData()).AStoreData());
    return (await RenewData()).AStoreData();
  };
  const dataB = async () => {
    setStoreData((await RenewData()).BStoreData());
    return (await RenewData()).BStoreData();
  };

  console.log(storeData[0]?.PlatformData);

  useEffect(() => {
    pathname.includes("A") && dataA();
    pathname.includes("B") && dataB();
  }, [pathname]);

  console.log(storeData);

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        style={{ fontSize: "1rem" }}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {storeData[0]?.PlatformData[index]?.name}
      </text>
    );
  };

  return (
    <StoreLayout>
      <div style={{ height: "30vh", width: "100%" }}>
        {storeData.length !== 0 && (
          <StoreCard store={storeData[0]} button={false} />
        )}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ height: "30vh", width: "40%" }}>
          <Heading style={{ fontSize: "1.5rem" }}>플랫폼별 주문</Heading>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={600} height={600}>
              <Pie
                data={storeData[0]?.PlatformData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {storeData[0]?.PlatformData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 인기 메뉴 주문 분포 // 바 차트 */}
        <div style={{ height: "30vh", width: "40%" }}>
          <Heading style={{ fontSize: "1.5rem" }}>카테고리 별</Heading>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={storeData[0]?.OrderCategory}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar
                dataKey="value"
                fill="#8884d8"
                background={{ fill: "#eee" }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div style={{ height: "40vh", width: "100%" }}>
        {/* 시간대별 주문 수 // 선 그래프 */}
        <Heading style={{ fontSize: "1.5rem" }}>시간대별 평균 주문량</Heading>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={storeData[0]?.timeData}
            margin={{
              top: 5,
              right: 30,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* <div>플랫폼별 주문 분포 // 바 차트</div> */}
    </StoreLayout>
  );
};

export default StorePage;
