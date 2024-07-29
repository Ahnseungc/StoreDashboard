export const orderSum = (data: any) => {
  let sum = 0;
  try {
    data.map((day) => {
      if (day.status === "success") {
        sum += day.data.orderCnt;
      } else {
        throw new Error("데이터 수신 실패");
      }
    });
    return sum;
  } catch (err) {
    return err;
  }
};
