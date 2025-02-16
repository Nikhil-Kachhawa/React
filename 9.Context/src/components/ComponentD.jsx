import React, { useContext } from 'react'
import { Data, Data1 } from '../App'

const ComponentD = () => {

    const userName = useContext(Data)
    const Age = useContext(Data1)

  return (
    <div>
        <h1>ComponentD</h1>
        <p>Username: {userName}</p>
        <p>Age: {Age}</p>
    </div>
  )
}

export default ComponentD