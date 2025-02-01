import React, {useState} from 'react'

const TodoList = () => {

    const [todolist, setTodolist] = useState([])

    const handleClick = () => {
        // setTodolist([...todolist])
        console.log("hey")
    }

  return (
    <div>
        <form action="">
            <label htmlFor="task_name">Task Name: </label>
            <input type="text" name="task_name" id="task_name"/>
            <button type="submit" onClick = {handleClick}>Add Task</button>
            <h1>: Tasks :</h1>
            {
                todolist.map() = () => {
                    <ul>
                        <li key = {Math.random() * 10}>{task}</li>
                    </ul>
                }
            }
        </form>
    </div>
  )
}

export default TodoList