export const highOrderPlatform = (data: any) => {
  try {
    let maxKey = "";
    let maxValue = -Infinity;
    const PlatformData = data.map((day) => {
      if (day.status === "success") {
        return day.data.platformCnt;
      } else {
        throw new Error();
      }
    });

    PlatformData.forEach((playformList) => {
      if (Object.keys(playformList).length > 0) {
        for (let platform in playformList) {
          if (playformList.hasOwnProperty(platform)) {
            if (playformList[platform] > maxValue) {
              maxValue = playformList[platform];
              maxKey = platform;
            }
          }
        }
      }
    });

    return { maxValue, maxKey };
  } catch (err) {
    return err;
  }
};
