import React from 'react'
import "./App.css"

const App = () => {
  const arr = [
    {
      id: 1,
      name: 'a',
    },
    {
      id: 2,
      name: 'b',
    },
  ]
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo List App</h1>
        <form className="todoForm">
          <input type="text" />
          <button>Go</button>
        </form>
        {/* For list of events */}
        <ul>
          <li>
            <span>Learn React</span>
            <button>Edit</button>
            <button>Delete</button>
          </li>
          <li>
            <span>Learn React</span>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
