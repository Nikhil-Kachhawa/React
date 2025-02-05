// import React, {useState} from 'react'

// const TodoList = () => {

//     const [todolist, setTodolist] = useState([])

//     const handleClick = (event) => {
//         event.preventDefault()
//         setTodolist([...todolist, event.target.value])
//         console.log("hey", event.target.value)
//     }

//   return (
//     <div>
//         <form action="">
//             <label htmlFor="task_name">Task Name: </label>
//             <input type="text" name="task_name" id="task_name"/>
//             <br />
//             <button type="submit" onClick = {handleClick}>Add Task</button>
//         </form>    
            
//         <h1>: Tasks :</h1>
//         <ul>
//         {todolist.map(
//             task => (
//                 <li key = {Math.floor(Math.random() * 100000)} >{task}</li>    
//             )
//         )}
//         </ul>

//     </div>
//   )
// }

// export default TodoList