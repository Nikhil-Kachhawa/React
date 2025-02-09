import React from 'react'
import CompA from './components/CompA'


const App = () => {
  const name = "Prop Drilling"
  return (
    <div>
      <h1>: My App :</h1>
      <CompA name = {name} />
    </div>
  )
}

export default App