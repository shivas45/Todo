import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [todolist, setTodolist] = useState([])
  
  let handleTodo=(event)=>{

    let toname = event.target.toname.value;

    alert(toname);
    event.preventDefault();
  }

  return (
    <div className="App">
      <h1>Todo List</h1>

      <form onSubmit={handleTodo}>
        <input type="text" name="toname" /> <button>Add</button>
      </form>

    </div>
  )
}

export default App
