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
  return fetachA;
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
