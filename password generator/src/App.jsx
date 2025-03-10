import React, { useState, useCallback, useEffect } from 'react'

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

    if (numAllowed) text += possible1;
    if (charAllowed) text += possible2;

    for(let i=1; i<=rangeValue; i++){
      pass += text.charAt(Math.floor(Math.random() * text.length));
    }

    setPwd(pass)

  }, [rangeValue, charAllowed, numAllowed, setPwd])

  useEffect(()=> {
    password()
  } , [rangeValue, charAllowed, numAllowed, password])

  const handleClick = useCallback(()=> {
      window.navigator.clipboard.writeText(pwd)
      alert("Password Copied Successfully")
    }, [pwd])
  return (
    <div className = "w-screen h-screen border-4 border-indigo-500">
        <h1 className="text-4xl text-center m-4 p-4">: Password Generator :</h1>

      <div className="flex flex-col items-center justify-center m-2 p-2 ">
        <input type="text" name="pwd" id="pwd" 
          className="bg-green-100 text-black font-bold w-100 m-2" 
          value={pwd}
          readOnly
        />
        
        <button 
          className="bg-indigo-500 hover:bg-green-700 text-white font-bold m-2 p-2 cursor-pointer rounded" 
          onClick={handleClick}
        > Copy ! </button>
        
        <br />

        <label htmlFor="range1to100">
          <input 
            type="range" 
            min="4" 
            max="24" 
            onChange={(e) => setRangeValue(e.target.value)} 
          />
          Length : {rangeValue}
        </label>

        <br />

        <label htmlFor="charAllowed">
          <input 
            type="checkbox"
            defaultChecked={charAllowed}
            onClick={() => setCharAllowed((prev) => !prev)}
          />
          Characters Allowed ? 
        </label>
        
        <br />

        <label htmlFor="numAllowed">
          <input type="checkbox"  
            defaultChecked={numAllowed}
            onClick={() => setNumAllowed((prev) => !prev)}
          />
          Numbers Allowed ? 
        </label>
      </div>
    </div>
  )
}

export default App