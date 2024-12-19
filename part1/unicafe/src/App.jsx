import { useState } from 'react'

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const all = good + neutral + bad;

  if (all === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }

  const average = (good - bad) / all;
  const positive = (good / all) * 100 + '%';

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
}


const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
} 
const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
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