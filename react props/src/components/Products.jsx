import React from 'react'

const Products = (props) => {
  return (
    <div>
        <h1>Products Component</h1>
        <h2> {props.name} </h2>
        <h3> {props.price} </h3>
    </div>
  )
}

export default Products