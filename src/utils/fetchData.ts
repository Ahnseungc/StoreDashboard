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

export interface fetchDataProps {
  type: "A" | "B" | "C" | "D";
}
const getDirectoryPath = (type: "A" | "B" | "C" | "D") => {
  switch (type) {
    case "A":
      return directoryPathA;
    case "B":
      return directoryPathB;
    case "C":
      return directoryPathC;
    case "D":
      return directoryPathD;
    default:
      throw new Error("Invalid type");
  }
};

export const fetchData = async ({ type }: fetchDataProps) => {
  try {
    const directoryPath = getDirectoryPath(type);
    let dataList = [];
    for (var i = 0; i < files.length; i++) {
      const response = await fetch(`${directoryPath + files[i]}`);

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
