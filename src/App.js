import React, {useState} from 'react'
import "./App.css"

const App = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    /* prevent refreshing of page */
    e.preventDefault();

    if (todo !== "") {
      /*... (spread operator), appends to the list */
      setTodos([{id:`${todo}-${Date.now()}`, todo}, ...todos])
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo List App</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setTodo(e.target.value)}/>
          <button type="submit">Go</button>
        </form>
        {/* For list of events */}
        <ul className="allTodos">
          <li className="singleTodo">
            <span className="todoText">Learn React</span>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
