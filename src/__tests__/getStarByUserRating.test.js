import { getInteger, getDecimal, getStarByUserRatingScale5 } from '../utils/getStarByUserRating';

describe("소수를 정수와 소수로 분리하기", () => {
  test('소수에서 정수 부분 가져오기', () => {
    expect(getInteger(0)).toBeCloseTo(0);
    expect(getInteger(0.1)).toBeCloseTo(0);
    expect(getInteger(0.0)).toBeCloseTo(0);
    expect(getInteger(1.0)).toBeCloseTo(1);
    expect(getInteger(1.2)).toBeCloseTo(1);
    expect(getInteger(1.5)).toBeCloseTo(1);
    expect(getInteger(1.9)).toBeCloseTo(1);
    expect(getInteger(2.0)).toBeCloseTo(2);
  })

  test('소수에서 정수 부분을 버리고 소수 부분 가져오기', () => {
    expect(getDecimal(0)).toBeCloseTo(0);
    expect(getDecimal(0.1)).toBeCloseTo(0.1);
    expect(getDecimal(0.9)).toBeCloseTo(0.9);
    expect(getDecimal(1.0)).toBeCloseTo(0);
    expect(getDecimal(1.2)).toBeCloseTo(0.2);
    expect(getDecimal(1.5)).toBeCloseTo(0.5);
    expect(getDecimal(1.9)).toBeCloseTo(0.9);
    expect(getDecimal(100.0)).toBeCloseTo(0);
    expect(getDecimal(100.5)).toBeCloseTo(0.5);
    expect(getDecimal(100.9)).toBeCloseTo(0.9);
  })
})

describe("유저 평점을 별 갯수로 변환하기", () => {
  test('비정상적인 유저 평점이 들어온 경우', () => {
    expect(getStarByUserRatingScale5(-0.1)).toEqual(null);
    expect(getStarByUserRatingScale5(-1)).toEqual(null);
    expect(getStarByUserRatingScale5(6)).toEqual(null);
    expect(getStarByUserRatingScale5(5.1)).toEqual(null);
  })

  test('반쪽 별이 없는 경우', () => {
    expect(getStarByUserRatingScale5(0.2)).toEqual([0, 0, 5])
    expect(getStarByUserRatingScale5(1.1)).toEqual([1, 0, 4])
    expect(getStarByUserRatingScale5(2.0)).toEqual([2, 0, 3])
    expect(getStarByUserRatingScale5(3.1)).toEqual([3, 0, 2])
    expect(getStarByUserRatingScale5(4.2)).toEqual([4, 0, 1])
    expect(getStarByUserRatingScale5(0.7)).toEqual([1, 0, 4])
    expect(getStarByUserRatingScale5(1.8)).toEqual([2, 0, 3])
    expect(getStarByUserRatingScale5(2.9)).toEqual([3, 0, 2])
    expect(getStarByUserRatingScale5(3.7)).toEqual([4, 0, 1])
    expect(getStarByUserRatingScale5(4.8)).toEqual([5, 0, 0])
  })

  test('반쪽 별이 있는 경우', () => {
    expect(getStarByUserRatingScale5(0.3)).toEqual([0, 1, 4])
    expect(getStarByUserRatingScale5(1.4)).toEqual([1, 1, 3])
    expect(getStarByUserRatingScale5(2.5)).toEqual([2, 1, 2])
    expect(getStarByUserRatingScale5(3.6)).toEqual([3, 1, 1])
  })
})  