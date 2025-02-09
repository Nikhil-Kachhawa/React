import React from 'react'
import BasicEffect from './components/BasicEffect'
import CounterEffect from './components/CounterEffect'
import FetchDataEffect from './components/FetchDataEffect'
import FetchSimpleArraydata from './components/FetchSimpleArraydata'

const App = () => {

  return (
    <div>
      <BasicEffect />
      <CounterEffect />
      <FetchDataEffect />
      <FetchSimpleArraydata />
    </div>
  )
}

export default App