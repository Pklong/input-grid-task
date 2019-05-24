import React from 'react'

function sanitize(num) {
  if (num === '') {
    return 0
  }
  return Math.round(Number(num))
}

const NumberInput = ({ add, num }) => (
  <input
    placeholder="Enter an Integer"
    onChange={e => add(sanitize(e.target.value))}
    type="number"
    value={num ? num : false}
  />
)

export default NumberInput
