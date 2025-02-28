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