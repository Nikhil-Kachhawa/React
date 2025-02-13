import React from 'react'
import { Data } from '../App'

const ComponentC = () => {
  return (
    <div>
        <h1>ComponentB</h1>
        <Data.Consumer>
            {(name) => {
               return <h2>Name : {name} which is passed from Create Context App</h2>
            }}
        </Data.Consumer>
    </div>
  )
}

export default ComponentC