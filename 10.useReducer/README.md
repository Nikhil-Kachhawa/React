- useReducer Hook : 
-----------------------
- This is similar to useState hook but it is designed for more complex state objects or state transitions that involves multiple subvalues 
- It allows you to manage state in a functional, immutable way.

- General syntax - 
const [state, dispatch] = useReducer(reducer, initialState)

- initialState = starting value for the state when the component first renders 
- reducer = this is a function that describes how state should change based on actions/conditions. It takes current state and an action/condition as inputs, and returns a new state.
- state = current state value, which we can use in the component 
- dispatch = it is a function, which we call to send actions to reducer which then updates the state 

state = What we are updating
action = How we are updating

- App.jsx
```
import React, { useReducer } from 'react';

const initialState = {counter : 0}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return{...state, counter : state.counter + 1};
    
    case 'decrement':
      return{...state, counter : state.counter-1};
    
    case 'reset':
      return{...state, counter : 0};

    default:
      break;
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState )

  return (
    <div>
      <h1>Counter App using useReducer Hook</h1>
      <h1>Current Count : {state.counter}</h1>
        <button onClick = {() => dispatch({type: 'increment'})} > + </button>
        <button onClick = {() => dispatch({type: 'decrement'})} > - </button>
        <button onClick = {() => dispatch({type: 'reset'})} > Reset </button>
    </div>
  )
}

export default App
```