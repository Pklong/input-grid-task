import formatNumber from '../format'

it('converts input Number to String', () => {
  expect(formatNumber(0)).toBe('0')
})

it('places or omits decimal in appropriate location', () => {
  expect(formatNumber(100)).toBe('100')
  expect(formatNumber(1010)).toBe('1.01K')
  expect(formatNumber(10101)).toBe('10.1K')
  expect(formatNumber(101010)).toBe('101K')
})

it('appends correct number legend', () => {
  expect(formatNumber(999)).toBe('999')
  expect(formatNumber(888999)).toBe('888K')
  expect(formatNumber(777888999)).toBe('777M')
  expect(formatNumber(666777888999)).toBe('666B')
  expect(formatNumber(555666777888999)).toBe('555T')
  expect(formatNumber(444555666777888999)).toBe('444Q')
})
