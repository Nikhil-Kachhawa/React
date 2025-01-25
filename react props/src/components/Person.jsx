import React from 'react'

const Person = (props) => {

  return (
    <div>
      <h1>Person Component</h1>
      <h2> {props.name} </h2>
      <h3> {props.age} </h3>
    </div>
  )
}

export default Person