import React from 'react'
import CompC from './CompC'

const CompB = ({name}) => {
  return (
    <div>
            <h2>Component B</h2>
            <CompC name = {name} />
    </div>
  )
}

export default CompB