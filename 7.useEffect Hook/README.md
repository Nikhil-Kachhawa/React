useEffect :
-------------------------
- useEffect allows us to perform side effects in components
- Examples includes fetching data, directly updating the DOM etc
- Things to keep in mind :
1. If we don't specify anything as in dependency array then it will execute on every single render
2. We can't use useEffect hook inside conditional statements
3. Whenever we specify array dependency as empty array - [ ] then useEffect will get trigger when the component first renders otherwise if we specify some state var inside the array then useEffect will trigger whenever state changes.

- Simple useEffect : 
```
import React, {useEffect} from 'react'

const BasicEffect = () => {

  useEffect(() => {
    console.log('useEffect is called')
  }, [])  

  return (
    <div>
        <h1>: BasicEffect - See console for effect :</h1>
    </div>
  )
}

export default BasicEffect
```

- Playing with useState using useEffect
```
import React, {useState, useEffect} from 'react'

const CounterEffect = () => {

  const [counter, setCounter] = useState(0)  
  useEffect(
    () => {
        document.title = '(' + counter + ')' + ' users online'
    }, [counter])
  
  return (
    <div>
        <h1>Counter Effect</h1>
        <p>Counter: {counter}</p>
        <button onClick = {() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}

export default CounterEffect
```

- Handling data with help of useState & useEffect
```
import React, {useState, useEffect} from 'react'

const FetchSimpleArraydata = () => {

    const [data, setData] = useState([])
    useEffect(
      () => {
        async function getData () {
          const response  = await fetch("https://jsonplaceholder.typicode.com/users")
          const data = await response.json()
          setData(data)
          // console.log(data)
        }
        getData()  
      }
      
    , [])  

  return (
    <div>
        <h1>: Random Users of the Day :</h1>
    <ul>
      {
        data.map(
          (item) => (
            <div key={item.id}>
              <h2>Name : {item.name}</h2>
              <h3>Username : {item.username}</h3>
              <h3>Email : {item.email}</h3>
              <br />
            </div>
          )
        )
      }
    </ul>  
    </div>
  )
}

export default FetchSimpleArraydata
```
