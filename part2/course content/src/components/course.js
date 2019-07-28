import React from 'react'
import Header from './header'
import Content from './content'

const Course = ({ courses }) => {
  const course_rows = courses.map(course =>
      <div key={course.id}>
        <Header name={course.name} />
        <Content parts={course.parts} />
      </div>
    )
  return (
    <>
      <h1>Web development curriculum</h1>
      {course_rows}
    </>
  )
}

export default Course