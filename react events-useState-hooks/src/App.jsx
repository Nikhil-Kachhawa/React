import React from 'react'
import EventDemo from './components/EventDemo'
import Counter from './components/Counter'
import TodoList from './components/TodoList'


const App = () => {
  return (
    <div>
      <h1>React Event Handling</h1>
      <EventDemo />
      <Counter />
      <TodoList />
    </div>
  )
}

export default App