import { calculateTotalPrice } from '../utils/calculateTotalPrice';

describe("아이템의 총 가격을 계산하여 반환", () => {
  test('아이템의 총 가격을 계산하여 반환', () => {
    expect(calculateTotalPrice([])).toBe(0)
    expect(calculateTotalPrice([
      { price: 10000, cnt: 3 }
    ])).toBe(30000)
    expect(calculateTotalPrice([
      { price: 10000, cnt: 3 },
      { price: 2000, cnt: 1 },
      { price: 5000, cnt: 10 },
    ])).toBe(82000)
  })
})