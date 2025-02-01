import React, { useState } from 'react'

const EventDemo = () => {
    const [text, setText] = useState('Some Text')

    // function handleClick () { 
    //     return setText('New Text') 
    // }

    const handleClick = () => { 
        return setText('New Text') 
    }
    
  return (
    <div>
        <button onClick={handleClick}> Old Text : {text} </button>
        <p>Changed Text : {text}</p>
        <hr />
    </div>
  )
}

export default EventDemo