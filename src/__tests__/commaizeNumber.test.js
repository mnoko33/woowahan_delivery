import { commaizeNumber } from '../utils/commaizeNumber';
// const commaizeNumber = require('../utils/commaizeNumber');
describe("숫자에 세자리마다 ,를 찍어주기", () => {
  test('999 이하의 숫자는 아무런 작업을 취하지 않는다.', () => {
    expect(commaizeNumber(0)).toBe('0')
    expect(commaizeNumber(10)).toBe('10')
    expect(commaizeNumber(500)).toBe('500')
    expect(commaizeNumber(999)).toBe('999')
  })

  test('1000 이상, 999999 이하의 숫자에는 ,를 하나 찍어서 반환한다.', () => {
    expect(commaizeNumber(1000)).toBe('1,000')
    expect(commaizeNumber(10000)).toBe('10,000')
    expect(commaizeNumber(100000)).toBe('100,000')
    expect(commaizeNumber(999999)).toBe('999,999')
  })
})