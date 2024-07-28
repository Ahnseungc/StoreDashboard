import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "06/01",
    A매장: 4000,
    B매장: 2400,
    C매장: 2400,
  },
  {
    name: "06/02",
    A매장: 3000,
    B매장: 1398,
    C매장: 2210,
  },
  {
    name: "06/03",
    A매장: 2000,
    B매장: 9800,
    C매장: 2290,
  },
  {
    name: "06/04",
    A매장: 2780,
    B매장: 3908,
    C매장: 2000,
  },
  {
    name: "06/05",
    A매장: 1890,
    B매장: 4800,
    C매장: 2181,
  },
  {
    name: "06/06",
    A매장: 2390,
    B매장: 3800,
    C매장: 2500,
  },
  {
    name: "06/07",
    A매장: 3490,
    B매장: 4300,
    C매장: 2100,
  },
];

const Day = () => {
  return (
    <div style={{ height: "100vh", padding: "3rem" }}>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="A매장"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
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
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Day;
