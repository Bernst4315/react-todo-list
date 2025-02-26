import { useReducer } from "react"

function reducer (state, action){
    
}

export default function TaskItem(){

    const [task, dispatch] = useReducer(reducer, "");

    function reducer(state, action){
        
    }

    return (
        <div className='task-item'>
            <input type="checkbox" className='checkbox'/>
            <p>Todo task</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}