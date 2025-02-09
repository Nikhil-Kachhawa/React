import React, {useState, useEffect} from 'react'

const CounterEffect = () => {

  const [counter, setCounter] = useState(0)  
  useEffect(
    () => {
        document.title = '(' + counter + ')' + ' users online'
    }, [counter])
  
  return (
    <div>
        <h1>Counter Effect</h1>
        <p>Counter: {counter}</p>
        <button onClick = {() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}

export default CounterEffect