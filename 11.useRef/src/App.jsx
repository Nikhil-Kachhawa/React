import React, { useRef } from 'react'
import Timer from './components/Timer';

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

      <Timer />

    </div>
  )
}

export default App