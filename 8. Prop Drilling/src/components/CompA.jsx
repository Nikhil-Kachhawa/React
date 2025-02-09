import React from 'react'
import CompB from './CompB'

const CompA = ({name}) => {
  return (
    <div>
        <h2>Component A</h2>
        <CompB name = {name} />
    </div>
  )
}

export default CompA