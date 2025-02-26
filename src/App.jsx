import { useState, useReducer, useRef } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import TaskItem from './components/TaskItem'

function reducer(state, action){
  switch(action.type){
    case "add":
      return action.payload; 
  }
}

function App() {

  const [task, dispatch] = useReducer(reducer, [])
  const taskInput = useRef(); 
  
  function handleClick(e){
    e.preventDefault()
    const task = [taskInput.current.value];

    if(task){
      dispatch({type: "add", payload: task})
    }
}

  return (
    <div>
      <h1>Todo List</h1>
      <AddTask handleClick={(e) => handleClick(e)} taskInput={taskInput}/>
      <TaskItem task={task}/>

        <form action="" className='edit-task'>
          <input type="text" />
          <button>save</button>
        </form>
    </div>
  )
}

export default App
