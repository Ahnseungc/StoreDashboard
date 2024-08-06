import {
  Text,
  Card,
  CardBody,
  Heading,
  Stack,
  Box,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  Thead,
  Th,
  Tfoot,
  Button,
  Input,
} from "@chakra-ui/react";
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
  ComposedChart,
} from "recharts";
import { StoreLayout } from "./styles";
import { useEffect, useState } from "react";
import { RenewData } from "@utils/dataPreprocessing";
import StoreCard from "@component/storeCard/sotreCard";
import { FC } from "react";
import { useLocation } from "react-router-dom";

interface StorePagePros {
  // storeName: string;
}

const StorePage: FC<StorePagePros> = ({}) => {
  const { pathname } = useLocation();
  const [storeData, setStoreData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const pageSize = 10;
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

  //필터
  const getFilteredData = () => {
    if (!storeData[0]?.OrderMenu) return [];
    return storeData[0]?.OrderMenu?.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  //페이지네이션
  const getCurretnPageData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const filteredData = getFilteredData();
    return filteredData.slice(startIndex, startIndex + pageSize) || [];
  };

  const pageCount = Math.ceil(
    (storeData[0]?.OrderMenu?.length || 0) / pageSize
  );

  const handlePageonChange = (page) => {
    setCurrentPage(page);
  };

  const onChangeInput = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  console.log(storeData);

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
          <Heading mb="1rem" style={{ fontSize: "1.5rem" }}>
            플랫폼별 주문
          </Heading>
          <ResponsiveContainer width="100%" height="100%">
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
          <Heading mb="1rem" style={{ fontSize: "1.5rem" }}>
            카테고리 별
          </Heading>
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
        <Heading mb="1rem" style={{ fontSize: "1.5rem" }}>
          시간대별 평균 주문량
        </Heading>
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

      <div
        style={{
          width: "100%",
          marginTop: "4rem",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Heading style={{ fontSize: "1.5rem" }}>주문 메뉴 현황</Heading>
          <Input
            placeholder="메뉴 이름을 입력해 주세요."
            style={{ width: "60%" }}
            onChange={(e) => onChangeInput(e)}
          />
        </div>
        <TableContainer mt="1rem" height="63vh" overflowY="auto">
          <Table
            variant="simple"
            colorScheme="pink"
            style={{ tableLayout: "fixed" }}
          >
            <Thead>
              <Tr>
                <Th>no</Th>
                <Th>메뉴</Th>
                <Th>주문</Th>
              </Tr>
            </Thead>
            <Tbody>
              {storeData[0] &&
                getCurretnPageData()?.map((data, index) => {
                  return (
                    <Tr key={index} style={{ marginTop: "0.5rem" }}>
                      <Td>
                        <Text>{(currentPage - 1) * pageSize + index + 1}</Text>
                      </Td>
                      <Td>
                        <Text fontWeight="bold">{data.name}</Text>
                      </Td>
                      <Td>
                        <Text>{data.value}건</Text>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
        <Box position="relative" height="13vh">
          <Box
            mt="1rem"
            position="absolute"
            height="5rem"
            left="50%"
            transform="translateX(-50%)"
            bottom="0"
          >
            <Button
              onClick={() => handlePageonChange(currentPage - 1)}
              isDisabled={currentPage === 1}
            >
              이전
            </Button>
            {Array.from({ length: pageCount }, (_, index) => (
              <Button
                key={index}
                onClick={() => handlePageonChange(index + 1)}
                isActive={currentPage === index + 1}
                mx="0.5rem"
              >
                {index + 1}
              </Button>
            ))}
            <Button
              onClick={() => handlePageonChange(currentPage + 1)}
              isDisabled={currentPage === pageCount}
            >
              다음
            </Button>
          </Box>
        </Box>
      </div>
    </StoreLayout>
  );
};

export default StorePage;
