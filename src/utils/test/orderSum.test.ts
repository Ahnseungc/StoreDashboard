import { orderSum } from "../orderSum";

describe("orderSum", () => {
  it("should return the sum of orderCnt for successful orders", () => {
    const data = [
      { status: "success", data: { orderCnt: 5 } },
      { status: "success", data: { orderCnt: 10 } },
      { status: "success", data: { orderCnt: 15 } },
    ];

    const result = orderSum(data);
    expect(result).toBe(30); // 5 + 10 + 15
  });

  it("should return an error when any order has a status other than success", () => {
    const data = [
      { status: "success", data: { orderCnt: 5 } },
      { status: "failed", data: { orderCnt: 10 } }, // This will trigger an error
      { status: "success", data: { orderCnt: 15 } },
    ];

    const result = orderSum(data);
    expect(result).toBeInstanceOf(Error);
  });

  it("should return 0 when there are no successful orders", () => {
    const data = [
      { status: "failed", data: { orderCnt: 5 } },
      { status: "failed", data: { orderCnt: 10 } },
      { status: "failed", data: { orderCnt: 15 } },
    ];

    const result = orderSum(data);
    expect(result).toBeInstanceOf(Error); // No successful orders, so the sum should be 0
  });

  it("should return 0 for an empty data array", () => {
    const data = [];

    const result = orderSum(data);
    expect(result).toBe(0); // Empty array should result in a sum of 0
  });
});
