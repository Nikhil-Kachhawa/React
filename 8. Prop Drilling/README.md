- Prop Drilling : 
------------------
- If we want to transfer data from parent component to child components then in react there are many ways one of which is prop drilling
- Just pass the data as prop to child componenets and so on 

```
import React from 'react'
import CompA from './components/CompA'

const App = () =>
 {
  const name = "Prop Drilling"
  return (

    <div>
      <h1>: My App :</h1>
      <CompA name = {name} />
    </div>
    
  )
}

export default App
```