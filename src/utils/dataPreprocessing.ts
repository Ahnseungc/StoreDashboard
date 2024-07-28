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

export const RenewData = async () => {
  const fetachA = await fetchDataA();
  const fetachB = await fetchDataB();
  const fetachC = await fetchDataC();
  const fetachD = await fetchDataD();
  console.log(fetachA);
  console.log(highOrderPlatform(fetachA));

  const ReturnOrderSum = () => {
    return [
      {
        store: "A매장",
        sum: orderSum(fetachA),
        maxTime: HighOrderTime(fetachA).maxTime,
        maxPlatform: highOrderPlatform(fetachA).maxKey,
      },
      {
        store: "B매장",
        sum: orderSum(fetachB),
        maxTime: HighOrderTime(fetachB).maxTime,
        maxPlatform: highOrderPlatform(fetachB).maxKey,
      },
      {
        store: "C매장",
        sum: orderSum(fetachC),
        maxTime: HighOrderTime(fetachC).maxTime,
        maxPlatform: highOrderPlatform(fetachC).maxKey,
      },
      {
        store: "D매장",
        sum: orderSum(fetachD),
        maxTime: HighOrderTime(fetachD).maxTime,
        maxPlatform: highOrderPlatform(fetachD).maxKey,
      },
    ];
  };

  return { ReturnOrderSum };
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
