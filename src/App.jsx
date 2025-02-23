import { useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import TaskItem from './components/TaskItem'

function App() {
  

  return (
    <div>
      <h1>Todo List</h1>
      <AddTask />
      <TaskItem />

        <form action="" className='edit-task'>
          <input type="text" />
          <button>save</button>
        </form>
    </div>
  )
}

export default App
