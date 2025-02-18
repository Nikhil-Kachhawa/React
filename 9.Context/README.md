- Create Context : 
-------------------
- It is a feature that allows us to manage and share state across your component tree without having to pass props down manually at every level.
- It's useful for scenarios where you need to share data or functions across many components, especially when these components are deeply nested 
- remember to wrap the code in created createContext data tag else you will get noting in display
- There are two properties of context API .provider & .consumer (they are self explanatory)
- in .provider we are passing object data mostly (as of now in this course)
- in .consumer we will get provided data and will use callback function and it will return some HTML code

- App.jsx
```
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
```
- ComponentC.jsx
```
import React from 'react'
import { Data} from '../App'

const ComponentC = () => {
  return (
    <div>
        <h1>ComponentB</h1>
        <Data.Consumer>
            {
                (name) => {
                    return (
                        <h2> 
                            Name : {name} which is passed from Create Context App
                        </h2>
                    )
                }    
            }
        </Data.Consumer>
    </div>
  )
}

export default ComponentC
```
- Here we can see now that we don't need to use prop-drilling and we can pass data from any component to other
- Below example shows passing 2 context data to same component

- App.jsx
```
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
```
- ComponentC.jsx
```
    import React from 'react'
    import { Data, Data1 } from '../App'

    const ComponentC = () => {
    return (
        <div>
            <h1>ComponentC</h1>
            <Data.Consumer>
                {
                    (name) => {
                        return (
                            // <h2> 
                            //     Name : {name} which is passed from Create Context App
                            // </h2>
                            <Data1.Consumer>
                                {(age) => {
                                    return (
                                        <h2> 
                                            Name : {name} which is passed from Create Context App and Age : {age} 
                                        </h2>)
                                }}
                            </Data1.Consumer>
                        )
                    }    
                }
            </Data.Consumer>
        </div>
    )
    }

    export default ComponentC
```	
- As you can see this is not that much convenient way to pass the data so we will look into more options

- useContext Hook :
----------------------
- This Hook allows us to access the context values provided by a context object directly within a functional component
- Context provides a way to pass data through the component tree without having to pass props down manually at every level 

- App.jsx stays same

- ComponentD.jsx
```
import React, { useContext } from 'react'
import { Data, Data1 } from '../App'

const ComponentD = () => {

    const userName = useContext(Data)
    const Age = useContext(Data1)

  return (
    <div>
        <h1>ComponentD</h1>
        <p>Username: {userName}</p>
        <p>Age: {Age}</p>
    </div>
  )
}

export default ComponentD

```