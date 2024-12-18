import { useState } from 'react'

const Display = ({label, counter}) => {
  return (
    <div>{label} {counter}</div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const increaseGood = () => {

    console.log('increasing good, value before', good)
    setGood(good + 1)
  }

  const increaseNeutral = () => { 

    console.log('increasing neutral, value before', neutral)
    setNeutral(neutral + 1)
  }

  const increaseBad = () => {

    console.log('increasing bad, value before', bad)
    setBad(bad + 1)
  }


  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />
      <h2>statistics</h2>
      <Display label="good" counter={good} />
      <Display label="neutral" counter={neutral} />
      <Display label="bad" counter={bad} />

    </div>
  )
}

export default App