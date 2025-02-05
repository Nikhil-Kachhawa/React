State :
--------
- State is a way to store and manage data that can change over time and affects how the component renders.
- We define state using the useState Hook, which allows you to set an initial value and provides a way to update that state 

Hooks : 
--------
- Hooks are new addition in React 16.8 
- They let you use State and other React features without writing a class based component
 
useState Hook :
----------------
- useState Hook allows us to track state in functional component
- State generally refers to data or properties that need to be tracking in an application

```
import React, { useState } from 'react'

const EventDemo = () => {
    const [text, setText] = useState('Some Text')

    // function handleClick () { 
    //     return setText('New Text') 
    // }

    const handleClick = () => { 
        return setText('New Text') 
    }
    
  return (
    <div>
        <button onClick={handleClick}> Old Text : {text} </button>
        <p>Changed Text : {text}</p>
        <hr/>
    </div>
  )
}
```
- whenever you are changing something make sure to use the useState to update the state

Playing with counter/Numbers using useState
--------------------------------------------
```
import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    let handleClick = () => {
        setCount(count + 1)
    }

  return (
    <div>
        <p>Count: {count}</p>
        {/* <button onClick={() => setCount(count + 1)}>+</button> */}
        <button onClick={handleClick}> Increment + </button>
        <button onClick={() => {setCount(count-1)}}> Decrement - </button>
        <hr />
    </div>
  )
}

export default Counter
```

Playing with Arrays using useState
------------------------------------
```
import React, {useState} from 'react'

const TodoList = () => {

    const [todoList, setTodoList] = useState([])
    const [tasks, setTasks] = useState("")

    const handleOnChange = (event) =>{
        setTasks(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(tasks.trim() && tasks.length !== 0){
            setTodoList([...todoList, tasks])
        }
        setTasks("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="task_name">Task Name: </label>
            <input type="text" value={tasks} name="task_name" id="task_name" onChange = {handleOnChange}/>
            <br />
            <button type="submit" >Add Task</button>
        </form>    
            
        <h1>: Tasks :</h1>
        <ul>
        {todoList.map(
            task => (
                <li key = {Math.floor(Math.random() * 100000)} >{task}</li>    
            )
        )}
        </ul>
        <hr />
    </div>
  )
}

export default TodoList
```
Playing with Objects using useState
------------------------------------
```
import React, {useState} from 'react'

const Profile = () => {
  
    const [user, setUser] = useState({})
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const handleSubmit = (event) => 
    {
        event.preventDefault()
        if(name.trim() && age >= 0){
            setUser({name, age})
        }
        setName('')
        setAge('')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" value={name} name="name" id="name" onChange={(e) => setName(e.target.value)} />
            <br />
            <label htmlFor="age">Age:</label>
            <input type="number" value={age} name="age" id="age" onChange={(e) => setAge(Number(e.target.value))} />
            <br />
            <button type="submit">Submit</button>
        </form>
        <h1>: Profile Information :</h1>
        <ul>
            <li> Name : {user.name}</li>
            <li> Age : {user.age}</li>
        </ul>
    </div>
  )
}

export default Profile
```

Playing with Array of Objects using useState
----------------------------------------------
```
import React, {useState} from 'react'

const ShoppingList = () => {

  const [cart, setCart] = useState([]) 
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")
  
  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleQuantityChange = (event) => {
    setQuantity(Math.max(0, Number(event.target.value)))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(name.trim() && quantity > 0){
      setCart([...cart, {name, quantity}])
    }
    setName("")
    setQuantity("")
  }

  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" value={name} onChange={handleNameChange}/>
            <br />
            <label htmlFor="quantity">Quantity: </label>
            <input type="number" name="quantity" id="quantity" value={quantity} onChange={handleQuantityChange}/>
            <br />
            <button type="submit">Add to Cart</button>
        </form>

        <h1>: Shopping List :</h1>

        <ul>
            {cart.map(
                (cartItem) => (
                    <li key = {Math.random() * 1000}>{cartItem.name} {cartItem.quantity}</li>
                )
            )    
            }
        </ul>

    </div>
  )
}

export default ShoppingList
```