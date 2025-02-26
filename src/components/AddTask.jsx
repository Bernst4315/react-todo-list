

export default function AddTask({handleClick}){
    

    return (
        <form onSubmit={handleClick} className='add-task'>
            <input type="text" name="taskInput" />
            <input type="submit" value="add" />
        </form>  
    )
}