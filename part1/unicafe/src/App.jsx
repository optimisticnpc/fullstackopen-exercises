import { useState } from 'react'

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h2>statistics</h2>
      <Display label="good" counter={props.good} />
      <Display label="neutral" counter={props.neutral} />
      <Display label="bad" counter={props.bad} />
      <Display label="all" counter={props.good + props.neutral + props.bad} />
      <Display label="average" counter={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
      <Display label="positive" counter={(props.good / (props.good + props.neutral + props.bad)) * 100 + '%'} />
    </div>
  )
}


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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App