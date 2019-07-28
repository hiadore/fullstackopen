import React from 'react'
import Part from './part'

const Content = ({ parts }) => {
  const rows = () => parts.map(part =>
    <Part
      key={part.id}
      part={part}
    />
  )

  const sum = () => parts.reduce((acc, part) =>
    acc + part.exercises, 0
  )
  
  return (
    <>
      {rows()}
      <p><b>total of {sum()} exercises</b></p>
    </>
  )
}

export default Content;