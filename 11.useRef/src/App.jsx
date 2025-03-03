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