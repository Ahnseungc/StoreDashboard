export const lowOrderSum = (...order: Array<number>): number => {
  try {
    if (order.length === 0) {
      throw new Error("주문합계가 없음");
    }
    return Math.min(...order);
  } catch (err) {
    return err;
  }
};
