export const highOrderMenu = (data: any) => {
  try {
    const OrderData = data.map((day) => {
      if (day.status === "success") {
        return day.data.menuCnt;
      } else {
        throw new Error("데이터 수신 실패");
      }
    });

    let sumsOrder: { [key: string]: number } = {};
    OrderData.forEach((orderList, index) => {
      for (let order in orderList) {
        if (!sumsOrder[order]) {
          sumsOrder[order] = 0;
        }
        sumsOrder[order] += orderList[order];
      }
    });

    const sortedEntries = Object.entries(sumsOrder)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    const popularMenu = Object.fromEntries(sortedEntries);

    const [maxKey, maxValue] = Object.entries(sumsOrder).reduce(
      ([currentMaxKey, currentMaxValue], [key, value]) => {
        return value > currentMaxValue
          ? [key, value]
          : [currentMaxKey, currentMaxValue];
      },
      ["", -Infinity] // 초기값 설정
    );
    const storePlatformChartData = Object.entries(sumsOrder).map(
      ([key, value]) => ({
        name: key,
        value: value,
      })
    );

    const storePopularMenuChartData = Object.entries(popularMenu).map(
      ([key, value]) => ({
        name: key,
        value: value,
      })
    );

    return {
      maxValue,
      maxKey,
      sumsOrder,
      storePlatformChartData,
      storePopularMenuChartData,
    };
  } catch (err) {
    return err;
  }
};
