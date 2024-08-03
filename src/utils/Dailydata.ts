interface DailyDataProps {
  data: any;
}

export const DailyData = (data: any) => {
  const DailyOrderSum = data?.map((day) => {
    return {
      date: day?.data?.date.slice(5, 10),
      주문: day?.data?.orderCnt,
    };
  });

  return { DailyOrderSum };
};
