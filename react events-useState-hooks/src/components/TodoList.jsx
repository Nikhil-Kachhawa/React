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