import React, { useState, useCallback } from 'react'

const App = () => {

  const [rangeValue, setRangeValue] = useState(4)
  const [charAllowed, setCharAllowed] = useState(false)
  const [numAllowed, setNumAllowed] = useState(false)
  const [pwd, setPwd] = useState('')

  const password = useCallback( () => {
    let pass = ""
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const possible1 = "0123456789"
    const possible2 = "!@#$%^&*()_+"

    if(charAllowed) text += possible1
    if(numAllowed) text += possible2

    for(let i=1; i<=rangeValue; i++){
      pass += text.charAt(Math.floor(Math.random() * 1))
    }

    setRangeValue(pass)

  }, [rangeValue, charAllowed, numAllowed, setPwd])

  const handleClick = () => {
    console.log("ads");
  }

  // const handleRangeChange = (e) => {
  //   setRangeValue(e.target.value)
  //   setPwd(pwd)
    
  // }

  return (
    // <div className = "flex w-screen h-screen border-4 justify-center border-indigo-500">
    <div className = "border-indigo-500">
        <h1 className="text-4xl border mt-4">: Password Generator :</h1>
        
        <input type="text" name="pwd" id="pwd" 
          className="bg-green-100 text-black font-bold" 
          value={password}
        />
        
        <button 
          className="bg-indigo-500 hover:bg-green-700 text-white font-bold" 
          onClick={handleClick}
        > Copy ! </button>
        
        <br />

        <label htmlFor="range1to100">
          <input type="range" name="range4to24" id="range4to24" 
            min="4" 
            max="24" 
            // onChange={handleRangeChange} 
            value={rangeValue} 
          />
          {rangeValue}
        </label>

        <br />

        <label htmlFor="charAllowed">
          <input type="checkbox" name="charAllowed" id="charAllowed"
            onClick={() => pass}
          />
          Characters Allowed ? 
        </label>
        
        <br />

        <label htmlFor="numAllowed">
          <input type="checkbox" name="numAllowed" id="numAllowed" 
            onClick={() => pass}
          />
          Numbers Allowed ? 
        </label>
    
    </div>
  )
}

export default App