State :
--------
- State is a way to store and manage data that can change over time and affects how the component renders.
- We define state using the useState Hook, which allows you to set an initial value and provides a way to update that state 

Hooks : 
--------
- Hooks are new addition in React 16.8 
- They let you use State and other React features without writing a class based component
 
useState Hook :
----------------
- useState Hook allows us to track state in functional component
- State generally refers to data or properties that need to be tracking in an application

```
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
    </div>
  )
}
```