- useRef :
------------
- useRef hook provides a way to access and interact with DOM elements or to persist values across renders without causing a re-render 

- App.jsx
```
import React, { useRef } from 'react'

const App = () => {

  const element = useRef(null);

  const handleClick = () => {
    console.log(element);
    element.current.value = "RKO";
  } 

  return (
    <div>
      <h1>: useRef :</h1>

      <input type="text" ref={element}/>
      <button onClick={handleClick}>Add "RKO" text</button>

    </div>
  )
}

export default App
```
