export const HighOrderTime = (data: any) => {
  try {
    const totalHours = 24;
    let count = 0;
    const sums = new Array(totalHours).fill(0);
    const TimeData = data.map((day) => {
      if (day.status === "success") {
        return day.data.timeCnt;
      } else {
        throw new Error();
      }
    });
    count = TimeData.length;

    TimeData.forEach((day) => {
      for (let hour = 0; hour < totalHours; hour++) {
        sums[hour] += day[hour] || 0;
      }
    });

    //각 시간대 평균
    const average = sums.map((sum) => sum / count);

    //차트 데이터
    const TimeChartData = average.map((value, index) => ({
      name: String(index),
      value: Math.round(value),
    }));

    // 시간대 중 가장 많은 주문 수
    let highTime = 0;
    let highOrder = 0;

    highOrder = average[0];
    for (let hour = 1; hour <= average.length; hour++) {
      if (average[hour] > highOrder) {
        highOrder = average[hour];
        highTime = hour;
      }
    }
    highOrder = Math.round(highOrder);

    //0시 일경우 23-24리턴
    if (highTime === 0) {
      return {
        maxTime: [23, 24],
        maxOrder: highOrder,
        timeAverageData: average,
        TimeChartData: TimeChartData,
      };
    } else {
      return {
        maxTime: [highTime - 1, highTime],
        maxOrder: highOrder,
        timeAverageData: average,
        TimeChartData: TimeChartData,
      };
    }
  } catch (err) {
    return err;
  }
};
