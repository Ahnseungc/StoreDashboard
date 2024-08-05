import { orderSum } from "../order/orderSum";

describe("orderSum", () => {
  it("상태가 성공만 있는 케이스", () => {
    const data = [
      { status: "success", data: { orderCnt: 5 } },
      { status: "success", data: { orderCnt: 10 } },
      { status: "success", data: { orderCnt: 15 } },
    ];

    const result = orderSum(data);
    expect(result).toBe(30); // 5 + 10 + 15
  });

  it("상태가 실패와 성공이 공존하는 케이스", () => {
    const data = [
      { status: "success", data: { orderCnt: 5 } },
      { status: "failed", data: { orderCnt: 10 } }, // This will trigger an error
      { status: "success", data: { orderCnt: 15 } },
    ];

    const result = orderSum(data);
    expect(result).toBeInstanceOf(Error);
  });

  it("상태가 실패만 있는 케이스", () => {
    const data = [
      { status: "failed", data: { orderCnt: 5 } },
      { status: "failed", data: { orderCnt: 10 } },
      { status: "failed", data: { orderCnt: 15 } },
    ];

    const result = orderSum(data);
    expect(result).toBeInstanceOf(Error); // No successful orders, so the sum should be 0
  });

  it("데이터가 없을때", () => {
    const data = [];

    const result = orderSum(data);
    expect(result).toBe(0); // Empty array should result in a sum of 0
  });
});
