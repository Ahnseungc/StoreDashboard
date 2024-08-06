import { orderSum } from "./order/orderSum";
import { HighOrderTime } from "./time/highOrderTime";
import { highOrderPlatform } from "./platform/highOrderPlatform";
import { highOrderSum } from "./order/highOrderSum";
import { lowOrderSum } from "./order/lowOrderSum";
import { DailyData } from "./dailydata";
import { OrderCategory } from "./category/orderCategory";
import { highOrderMenu } from "./menu/higtOrderMenu";
import { fetchData } from "./fetchData";
import { fetchDataProps } from "./fetchData";
import { ArriveAverage } from "./time/arriveAverage";
import { dailyOrder } from "./order/dailyOrder";
import { dailyDetailOrder } from "./detail/dailyOrderDetail";
import { orderDetailSum } from "./detail/orderDetailSum";

export const RenewData = async () => {
  const storeList = ["A", "B", "C", "D"];

  const fetch = [
    fetchData({ type: "A" }),
    fetchData({ type: "B" }),
    fetchData({ type: "C" }),
    fetchData({ type: "D" }),
  ];

  const dataList = await Promise.all(fetch);

  const highOrder = highOrderSum(
    orderSum(dataList[0]),
    orderSum(dataList[1]),
    orderSum(dataList[2]),
    orderSum(dataList[3])
  );

  const lowOrder = lowOrderSum(
    orderSum(dataList[0]),
    orderSum(dataList[1]),
    orderSum(dataList[2]),
    orderSum(dataList[3])
  );

  const DailyDataAll = () => {
    return [
      { store: "A", data: DailyData(dataList[0]) },
      { store: "B", data: DailyData(dataList[1]) },
      { store: "C", data: DailyData(dataList[2]) },
      { store: "D", data: DailyData(dataList[3]) },
    ];
  };

  const storeData = ({ type }: fetchDataProps) => {
    const no = storeList.indexOf(type);

    return [
      {
        store: storeList[no],
        order: orderSum(dataList[no]),
        detailOrder: orderSum(dataList[no]),
        maxTime: HighOrderTime(dataList[no]).maxTime,
        maxPlatform: highOrderPlatform(dataList[no]).maxKey,
        timeData: HighOrderTime(dataList[no]).TimeChartData,
        timeHighOrder: HighOrderTime(dataList[no]).maxOrder,
        PlatformData: highOrderPlatform(dataList[no]).storePlatformChartData,
        popularOrderMenu: highOrderMenu(dataList[no]).storePopularMenuChartData,
        highOrder: highOrder,
        lowOrder: lowOrder,
        OrderCategory: OrderCategory(dataList[no]).storeCategoryChartData,
        OrderMenu: highOrderMenu(dataList[no]).storeMenuList,
        dailyOrderCount: dailyOrder(dataList[no]),
        dailyDetailOrder: dailyDetailOrder(dataList[no]),
        orderDetailSum: orderDetailSum(dataList[no]),
        highOrderMenu: highOrderMenu(dataList[no]).maxKey,
      },
    ];
  };

  const ReturnOrderSum = () => {
    return dataList.map((data, index) => ({
      store: storeList[index],
      order: orderSum(data),
      maxTime: HighOrderTime(data).maxTime,
      maxPlatform: highOrderPlatform(data).maxKey,
      highOrderMenu: highOrderMenu(data).maxKey,
      highOrder: highOrder,
      lowOrder: lowOrder,
    }));
  };

  return {
    ReturnOrderSum,
    DailyDataAll,
    storeData,
  };
};
