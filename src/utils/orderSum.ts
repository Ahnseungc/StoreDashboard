export const orderSum = (data: any) => {
  try {
    let sum = 0;
    data.map((day) => {
      if (day.status === "success") sum += day.data.orderCnt;
      else throw new Error();
    });
    return sum;
  } catch (err) {
    return err;
  }
};
