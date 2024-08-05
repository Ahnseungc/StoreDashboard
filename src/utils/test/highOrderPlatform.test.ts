import { highOrderPlatform } from "../platform/highOrderPlatform";

describe("highOrderPlatform", () => {
  it("should return the maximum value platform and its data", () => {
    const data = [
      { status: "success", data: { platformCnt: { A: 10, B: 5 } } },
      { status: "success", data: { platformCnt: { A: 15, B: 10 } } },
      { status: "success", data: { platformCnt: { C: 20 } } },
    ];

    const result = highOrderPlatform(data);

    expect(result).toEqual({
      maxValue: 25, // Platform C has the highest value
      maxKey: "A",
      sumsPlatform: { A: 25, B: 15, C: 20 },
      storePlatformChartData: [
        { name: "A", value: 25 },
        { name: "B", value: 15 },
        { name: "C", value: 20 },
      ],
    });
  });

  it("should return an error when any order has a status other than success", () => {
    const data = [
      { status: "success", data: { platformCnt: { A: 10, B: 5 } } },
      { status: "failed", data: { platformCnt: { A: 15, B: 10 } } }, // This will trigger an error
      { status: "success", data: { platformCnt: { C: 20 } } },
    ];

    const result = highOrderPlatform(data);

    expect(result).toBeInstanceOf(Error);
  });

  it("should return an empty object when there are no valid data", () => {
    const data = [
      { status: "failed", data: { platformCnt: { A: 10 } } },
      { status: "failed", data: { platformCnt: { B: 20 } } },
    ];

    const result = highOrderPlatform(data);

    expect(result).toBeInstanceOf(Error);
  });

  it("should return an empty result for an empty data array", () => {
    const data = [];

    const result = highOrderPlatform(data);

    expect(result).toEqual({
      maxValue: -Infinity,
      maxKey: "",
      sumsPlatform: {},
      storePlatformChartData: [],
    });
  });

  it("should handle cases where all platforms have zero values", () => {
    const data = [
      { status: "success", data: { platformCnt: { A: 0, B: 0 } } },
      { status: "success", data: { platformCnt: { A: 0, B: 0 } } },
    ];

    const result = highOrderPlatform(data);

    expect(result).toEqual({
      maxValue: 0,
      maxKey: "A", // or 'B', as they both have the same value
      sumsPlatform: { A: 0, B: 0 },
      storePlatformChartData: [
        { name: "A", value: 0 },
        { name: "B", value: 0 },
      ],
    });
  });
});
