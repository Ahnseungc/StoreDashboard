export const dailyOrder = (data: any) => {
  try {
    const orderCount = data.map((day) => {
      if (day.status === "success") {
        return { date: day.data.date, order: day.data.orderCnt };
      } else {
        throw new Error("데이터 수신 실패");
      }
    });

    return orderCount;
  } catch (err) {
    return err;
  }
};
