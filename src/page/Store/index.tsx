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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
  Area,
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
    pathname.includes("A") && dataA();
    pathname.includes("B") && dataB();
    pathname.includes("C") && dataC();
    pathname.includes("D") && dataD();
  }, [pathname]);

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

    // console.log

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
            {/* <PieChart width={600} height={600}>
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
            </PieChart> */}
            {/* <RadarChart
              cx="50%"
              cy="50%"
              outerRadius="80%"
              data={storeData[0]?.PlatformData}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis />
              <Radar
                name="Mike"
                dataKey="value"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart> */}
            <ComposedChart
              layout="vertical"
              width={500}
              height={400}
              data={storeData[0]?.PlatformData}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" scale="band" />
              <Tooltip />
              <Legend />

              <Bar dataKey="value" barSize={20} fill="#8884d8" />
            </ComposedChart>
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
