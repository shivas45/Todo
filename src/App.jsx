import { useState } from 'react'
import './App.css'

function App() {
  let [todolist, setTodolist] = useState([])

  let handleTodo = (event) => {
    event.preventDefault()

    let toname = event.target.toname.value

    if (toname.trim() === '') {
      return
    }

    setTodolist([...todolist, toname])

    event.target.toname.value = ''
  }

  let deleteTodo = (index) => {
    let updatedList = todolist.filter((_, i) => i !== index)
    setTodolist(updatedList)
  }

  return (
    <div className="App">
      <h1>Todo List</h1>

      <form onSubmit={handleTodo}>
        <input type="text" name="toname" />
        <button>Add</button>
      </form>

      <ul>
        {todolist.map((todo, index) => (
          <li key={index}>
            {todo}

            <button onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App