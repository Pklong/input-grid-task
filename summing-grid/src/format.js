const { MIN_SAFE_INTEGER, MAX_SAFE_INTEGER } = Number

const digitCountToLegend = numDigits => {
  switch (true) {
    case numDigits >= 16:
      return 'Q'
    case numDigits >= 13:
      return 'T'
    case numDigits >= 10:
      return 'B'
    case numDigits >= 7:
      return 'M'
    default:
      return 'K'
  }
}

const legendToTenPower = {
  Q: 15,
  T: 12,
  B: 9,
  M: 6,
  K: 3
}

function validateSafeRange(num) {
  if (num < 0 && num < MIN_SAFE_INTEGER) {
    alert('SUM IS BELOW ABILITY TO ACCURATELY REPRESENT')
  } else if (num > 0 && num > MAX_SAFE_INTEGER) {
    alert('SUM IS ABOVE ABILITY TO ACCURATELY REPRESENT')
  }
}

function buildDigitsWithDecimal(digits, tenPower) {
  const result = digits.slice(0, 3)
  const decimal = digits.length - tenPower

  if (decimal < 3) {
    result.splice(decimal, 0, '.')
  }
  return result.join('')
}

const formatNumber = num => {
  if (-1000 < num && num < 1000) return `${num}`

  validateSafeRange(num)

  const digits = String(num).split('')

  const sign = digits[0] === '-' ? digits.shift() : ''

  const numberLegend = digitCountToLegend(digits.length)

  const tenPower = legendToTenPower[numberLegend]

  const leadingDigits = buildDigitsWithDecimal(digits, tenPower)

  return `${sign}${leadingDigits}${numberLegend}`
}

export default formatNumber
