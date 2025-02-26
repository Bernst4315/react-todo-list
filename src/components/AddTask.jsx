

export default function AddTask({handleClick, taskInput}){
    

    return (
        <div  className='add-task'>
            <input type="text" name="taskInput" ref={taskInput}/>
            <button onClick={handleClick}>Add</button>
        </div>  
    )
}