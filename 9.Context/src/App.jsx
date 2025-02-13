import React, {createContext} from 'react'
import ComponentA from './components/ComponentA'

export const Data = createContext()

const App = () => {

  const name = 'John';

  return (
    <div>
      <Data.Provider value={name}>
        <h1> : CREATE CONTEXT : </h1>
        <ComponentA />
      </Data.Provider>
    </div>
  )
}

export default App