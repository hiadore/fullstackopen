import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  let average = 0
  let positive = 0
  if (all !== 0) {
    average = (good*1 + neutral*0 + bad*(-1)) / all
    positive = good / all * 100
  }

  return (
    <>
      <h1>statistics</h1>
      <p>
        good {good} <br />
        neutral {neutral} <br />
        bad {bad} <br />
        all {all} <br />
        average {average} <br />
        positive {positive} %
      </p>
    </>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)