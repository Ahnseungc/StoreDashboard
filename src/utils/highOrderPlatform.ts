export const highOrderPlatform = (data: any) => {
  try {
    const PlatformData = data.map((day) => {
      if (day.status === "success") {
        return day.data.platformCnt;
      } else {
        throw new Error();
      }
    });
    const sumsPlatform = {};
    PlatformData.forEach((platformList, index) => {
      for (let platform in platformList) {
        if (!sumsPlatform[platform]) {
          sumsPlatform[platform] = 0;
        }
        sumsPlatform[platform] += platformList[platform] || 0;
      }
    });

    const [maxKey, maxValue] = Object.entries(sumsPlatform).reduce(
      ([currentMaxKey, currentMaxValue], [key, value]) => {
        return value > currentMaxValue
          ? [key, value]
          : [currentMaxKey, currentMaxValue];
      },
      ["", -Infinity] // 초기값 설정
    );

    return { maxValue, maxKey, sumsPlatform };
  } catch (err) {
    return err;
  }
};
