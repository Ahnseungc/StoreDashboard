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
} from "recharts";
import { StoreLayout } from "./styles";
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

const Store = () => {
  //매장별 추이
  return (
    <StoreLayout>
      <div style={{ height: "30vh", width: "40%" }}>
        {/* 매출 개요 // 카드 형식 */}
        <Card>
          <CardBody>
            <Stack>
              <Heading size="md">A매장</Heading>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  gap: "0.5rem",
                }}
              >
                <Text>누적 주문 건수에요 </Text>
                <h4>4건</h4>
              </div>
              <div style={{ display: "flex", width: "50%", gap: "0.5rem" }}>
                <Text>주문이 잦은 시간대에요 </Text>
                <h4>17시 ~ 18시</h4>
              </div>
            </Stack>
          </CardBody>
        </Card>
      </div>
      <div style={{ height: "30vh", width: "40%" }}>
        {/* 시간대별 주문 수 // 선 그래프 */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
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
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* <div>플랫폼별 주문 분포 // 바 차트</div> */}
      <div style={{ height: "30vh", width: "40%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
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
            <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 인기 메뉴 주문 분포 // 바 차트 */}
      <div style={{ height: "30vh", width: "40%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
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
            <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </StoreLayout>
  );
};

export default Store;
