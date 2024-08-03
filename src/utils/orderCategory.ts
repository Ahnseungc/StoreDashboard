export const OrderCategory = (data: any) => {
  try {
    const CategoryData = data.map((day) => {
      if (day.status === "success") {
        return day.data.categoryCnt;
      } else {
        throw new Error("데이터 수신 실패");
      }
    });
    const sumsCatoefoyform = {};
    CategoryData.forEach((categoryList) => {
      for (let category in categoryList) {
        if (!sumsCatoefoyform[category]) {
          sumsCatoefoyform[category] = 0;
        }
        sumsCatoefoyform[category] += categoryList[category] || 0;
      }
    });
    const storeCategoryChartData = Object.entries(sumsCatoefoyform).map(
      ([key, value]) => ({
        name: key,
        value: value,
      })
    );

    return { sumsCatoefoyform, storeCategoryChartData };
  } catch (err) {
    return err;
  }
};
