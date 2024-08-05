interface Order {
  orderReceivedTime: string;
  orderCompletedTime: string;
}

interface OrderProcessingTime {
  [key: string]: Order;
}

interface AverageTimeByHour {
  hour: number;
  averageTime: number;
}

// 처리 시간을 계산하는 함수
const calculateProcessingTimes = (
  orderProcessingTime: OrderProcessingTime
): number[] => {
  try {
    return Object.values(orderProcessingTime).map((order) => {
      const receivedTime = new Date(order.orderReceivedTime);
      const completedTime = new Date(order.orderCompletedTime);
      if (isNaN(receivedTime.getTime()) || isNaN(completedTime.getTime())) {
        throw new Error("날짜 형식 오류");
      }
      const duration =
        (completedTime.getTime() - receivedTime.getTime()) / 1000 / 60; // 분 단위로 변환
      return duration;
    });
  } catch (error) {
    console.error("주문 처리 시간 요철 실패", error);
    return [];
  }
};

// 평균 소요 시간 계산 함수
const calculateAverageTime = (processingTimes: number[]): number => {
  try {
    if (processingTimes.length === 0) {
      throw new Error();
    }
    const total = processingTimes.reduce((sum, time) => sum + time, 0);
    return total / processingTimes.length;
  } catch (error) {
    console.error("주문 평균 처리 시간 요청 실패", error);
    return 0;
  }
};

// 시간대별 평균 소요 시간 계산 함수
const calculateAverageTimeByHour = (
  orderProcessingTime: OrderProcessingTime
): AverageTimeByHour[] => {
  try {
    const timeByHour: { [key: number]: { total: number; count: number } } = {};

    Object.values(orderProcessingTime).forEach((order) => {
      const receivedTime = new Date(order.orderReceivedTime);
      const hour = receivedTime.getHours();
      const completedTime = new Date(order.orderCompletedTime);
      if (isNaN(receivedTime.getTime()) || isNaN(completedTime.getTime())) {
        throw new Error("날짜 형식 오류");
      }
      const duration =
        (completedTime.getTime() - receivedTime.getTime()) / 1000 / 60; // 분 단위로 변환

      if (!timeByHour[hour]) {
        timeByHour[hour] = { total: 0, count: 0 };
      }
      timeByHour[hour].total += duration;
      timeByHour[hour].count += 1;
    });

    return Object.keys(timeByHour).map((hour) => {
      const { total, count } = timeByHour[parseInt(hour)];

      return { hour: parseInt(hour), averageTime: total / count };
    });
  } catch (error) {
    console.error("시간대 별 주문 시간 요청 실패", error);
    return [];
  }
};

// 메인 함수
export const ArriveAverage = (orderProcessingTime: OrderProcessingTime) => {
  const processingTimes = calculateProcessingTimes(orderProcessingTime);
  const averageTime = calculateAverageTime(processingTimes);
  const averageTimeByHour = calculateAverageTimeByHour(orderProcessingTime);

  return {
    AverageProcessingTime: averageTime,
    AverageProcessingTimeByHour: averageTimeByHour,
  };
};
