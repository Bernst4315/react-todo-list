import { useReducer } from "react";

function reducer(state, action) {}

export default function TaskItem({ task }) {
  //const [task, dispatch] = useReducer(reducer, "");

  // function reducer(state, action){

  // }
console.log(task[0])
console.log(typeof task)

  return (
//task.map((task) => {

        <div className="task-item">
          <input type="checkbox" className="checkbox" />
          <p>{task}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      



//})
    
  );
}
