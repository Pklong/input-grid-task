import React from 'react'
import NumberInput from './Input'
import SumDisplay from './Display'
import format from './format'
import './App.css'

function App() {
  const numInputs = 3

  const [digits, setDigits] = React.useState(
    new Array(numInputs).fill(0)
  )

  const buildInputs = inputCount => {
    return new Array(inputCount).fill().map((_, i) => {
      return (
        <NumberInput
          key={i}
          num={digits[i]}
          add={n =>
            setDigits([
              ...digits.slice(0, i),
              n,
              ...digits.slice(i + 1)
            ])
          }
        />
      )
    })
  }

  return (
    <div className="Container">
      <main className="App">
        {buildInputs(numInputs)}
        <SumDisplay
          sum={format(digits.reduce((acc, el) => acc + el, 0))}
        />
      </main>
    </div>
  )
}

export default App
