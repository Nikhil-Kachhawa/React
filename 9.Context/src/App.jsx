import React, {createContext} from 'react'
import ComponentA from './components/ComponentA'

export const Data = createContext()
export const Data1 = createContext()

const App = () => {

  const name = 'John';
  const age = 18;

  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <h1> : CREATE CONTEXT : </h1>
        <ComponentA />
        </Data1.Provider>   
      </Data.Provider>
    </div>
  )
}

export default App