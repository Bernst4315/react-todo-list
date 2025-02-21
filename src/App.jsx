import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <div>
      <h1>Todo List</h1>
        <form action="" className='add-task'>
          <input type="text" />
          <button>Add</button>
        </form>  
        
        <div className='task-item'>
          <input type="checkbox" className='checkbox'/>
          <p>Todo task</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>

        <form action="" className='edit-task'>
          <input type="text" />
          <button>save</button>
        </form>
    </div>
  )
}

export default App
