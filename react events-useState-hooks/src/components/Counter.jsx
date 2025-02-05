import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    let handleClick = () => {
        setCount(count + 1)
    }

  return (
    <div>
        <p>Count: {count}</p>
        {/* <button onClick={() => setCount(count + 1)}>+</button> */}
        <button onClick={handleClick}> Increment + </button>
        <button onClick={() => {setCount(count-1)}}> Decrement - </button>
        <hr />
    </div>
  )
}

export default Counter