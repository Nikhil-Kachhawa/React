import React from 'react'
import EventDemo from './components/EventDemo'
import Counter from './components/Counter'
// import TodoList from './components/TodoList'
// import Profile from './components/Profile'
import ShoppingList from './components/ShoppingList'

const App = () => {
  return (
    <div>
      <h1>React Event Handling</h1>
      <EventDemo />
      <Counter />
      {/* <TodoList /> */}
      {/* <Profile /> */}
      <ShoppingList />
    </div>
  )
}

export default App