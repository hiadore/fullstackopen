import React from 'react'
import Header from './header'
import Content from './content'

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </>
  )
}

export default Course