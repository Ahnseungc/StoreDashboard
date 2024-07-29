import { orderSum } from "./orderSum";
import { HighOrderTime } from "./highOrderTime";
import { highOrderPlatform } from "./highOrderPlatform";

const directoryPathA = "/data/A매장/";
const directoryPathB = "/data/B매장/";
const directoryPathC = "/data/C매장/";
const directoryPathD = "/data/D매장/";
const files = [
  "240601.json",
  "240602.json",
  "240603.json",
  "240604.json",
  "240605.json",
  "240606.json",
  "240607.json",
];

const storeList = ["A매장", "B매장", "C매장", "D매장"];

export const RenewData = async () => {
  const fetachA = await fetchDataA();
  const fetachB = await fetchDataB();
  const fetachC = await fetchDataC();
  const fetachD = await fetchDataD();

  const AStoreData = () => {
    return [
      {
        store: storeList[0],
        order: orderSum(fetachA),
        maxTime: HighOrderTime(fetachA).maxTime,
        maxPlatform: highOrderPlatform(fetachA).maxKey,
        timeData: HighOrderTime(fetachA).TimeChartData,
        PlatformData: highOrderPlatform(fetachA).storePlatformChartData,
        highOrder: highOrderSum(
          orderSum(fetachA),
          orderSum(fetachB),
          orderSum(fetachC),
          orderSum(fetachD)
        ),
        lowOrder: lowOrderSum(
          orderSum(fetachA),
          orderSum(fetachB),
          orderSum(fetachC),
          orderSum(fetachD)
        ),
      },
    ];
  };
  const BStoreData = () => {
    return [
      {
        store: storeList[1],
        order: orderSum(fetachB),
        maxTime: HighOrderTime(fetachB).maxTime,
        maxPlatform: highOrderPlatform(fetachB).maxKey,
        timeData: HighOrderTime(fetachB).TimeChartData,
        PlatformData: highOrderPlatform(fetachB).storePlatformChartData,
        highOrder: highOrderSum(
          orderSum(fetachA),
          orderSum(fetachB),
          orderSum(fetachC),
          orderSum(fetachD)
        ),
        lowOrder: lowOrderSum(
          orderSum(fetachA),
          orderSum(fetachB),
          orderSum(fetachC),
          orderSum(fetachD)
        ),
      },
    ];
  };

  const ReturnOrderSum = () => {
    return [
      {
        store: storeList[0],
        order: orderSum(fetachA),
        maxTime: HighOrderTime(fetachA).maxTime,
        maxPlatform: highOrderPlatform(fetachA).maxKey,
        highOrder: highOrderSum(
          orderSum(fetachA),
          orderSum(fetachB),
          orderSum(fetachC),
          orderSum(fetachD)
        ),
        lowOrder: lowOrderSum(
          orderSum(fetachA),
          orderSum(fetachB),
          orderSum(fetachC),
          orderSum(fetachD)
        ),
      },
      {
        store: storeList[1],
        order: orderSum(fetachB),
        maxTime: HighOrderTime(fetachB).maxTime,
        maxPlatform: highOrderPlatform(fetachB).maxKey,
        highOrder: highOrderSum(
          orderSum(fetachA),
          orderSum(fetachB),
          orderSum(fetachC),
          orderSum(fetachD)
        ),
        lowOrder: lowOrderSum(
          orderSum(fetachA),
          orderSum(fetachB),
          orderSum(fetachC),
          orderSum(fetachD)
        ),
      },
      {
        store: storeList[2],
        order: orderSum(fetachC),
        maxTime: HighOrderTime(fetachC).maxTime,
        maxPlatform: highOrderPlatform(fetachC).maxKey,
        highOrder: highOrderSum(
          orderSum(fetachA),
          orderSum(fetachB),
          orderSum(fetachC),
          orderSum(fetachD)
        ),
        lowOrder: lowOrderSum(
          orderSum(fetachA),
          orderSum(fetachB),
          orderSum(fetachC),
          orderSum(fetachD)
        ),
      },
      {
        store: storeList[3],
        order: orderSum(fetachD),
        maxTime: HighOrderTime(fetachD).maxTime,
        maxPlatform: highOrderPlatform(fetachD).maxKey,
        highOrder: highOrderSum(
          orderSum(fetachA),
          orderSum(fetachB),
          orderSum(fetachC),
          orderSum(fetachD)
        ),
        lowOrder: lowOrderSum(
          orderSum(fetachA),
          orderSum(fetachB),
          orderSum(fetachC),
          orderSum(fetachD)
        ),
      },
    ];
  };
  return { ReturnOrderSum, AStoreData, BStoreData };
};

const highOrderSum = (...order: Array<number>): number => {
  try {
    if (orderSum.length === 0) {
      throw new Error("주문합계가 없음");
    }
    return Math.max(...order);
  } catch (err) {
    return err;
  }
};

const lowOrderSum = (...order: Array<number>): number => {
  try {
    if (orderSum.length === 0) {
      throw new Error("주문합계가 없음");
    }
    return Math.min(...order);
  } catch (err) {
    return err;
  }
};

const fetchDataA = async () => {
  try {
    let dataList = [];
    for (var i = 0; i < files.length; i++) {
      const response = await fetch(`${directoryPathA + files[i]}`);

      if (!response.ok) {
        throw new Error("데이터 불러오기 실패");
      }
      const json = await response.json();

      json.status === "success" && dataList.push(json);
    }
    return dataList;
  } catch (error) {
    console.error("데이터 불러오기 실패", error);
  }
};

const fetchDataB = async () => {
  try {
    let dataList = [];
    for (var i = 0; i < files.length; i++) {
      const response = await fetch(`${directoryPathB + files[i]}`);

      if (!response.ok) {
        throw new Error("데이터 불러오기 실패");
      }
      const json = await response.json();

      json.status === "success" && dataList.push(json);
    }
    return dataList;
  } catch (error) {
    console.error("데이터 불러오기 실패", error);
  }
};
const fetchDataC = async () => {
  try {
    let dataList = [];
    for (var i = 0; i < files.length; i++) {
      const response = await fetch(`${directoryPathC + files[i]}`);

      if (!response.ok) {
        throw new Error("데이터 불러오기 실패");
      }
      const json = await response.json();

      json.status === "success" && dataList.push(json);
    }
    return dataList;
  } catch (error) {
    console.error("데이터 불러오기 실패", error);
  }
};
const fetchDataD = async () => {
  try {
    let dataList = [];
    for (var i = 0; i < files.length; i++) {
      const response = await fetch(`${directoryPathD + files[i]}`);

      if (!response.ok) {
        throw new Error("데이터 불러오기 실패");
      }
      const json = await response.json();

      json.status === "success" && dataList.push(json);
    }
    return dataList;
  } catch (error) {
    console.error("데이터 불러오기 실패", error);
  }
};
