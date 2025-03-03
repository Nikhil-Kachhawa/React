import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {

    const element = useRef(null);
    const [timer, setTimer] = useState(0)

    useEffect( 
        () => {
            element.current = setInterval(() => {
                setTimer((prevcount) => prevcount+1);
            }, 1000);

        return() => {
            clearInterval(element.current);
        }

    },[])

  return (
    <div>
        <h1>: Timer Component :</h1>
        <h2 >{timer}</h2>
        <button onClick = {() => clearInterval(element.current)} >Pause</button>
    </div>
  )
}

export default Timer