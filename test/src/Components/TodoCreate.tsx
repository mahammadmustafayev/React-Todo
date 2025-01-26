import { useDispatch } from "react-redux"
import { createTodo } from "../redux/todoslice"
import { useState } from "react";
import { TodoType } from "../Types/Types";



function TodoCreate() {
  const [newTodo, setnewTodo] = useState<string>('')  
  const dispatch=useDispatch();
  const createTodoHandle=()=>{
     if (newTodo.trim().length==0) {
        alert('Todo yazmamisan')
        return;
     }
     const payload:TodoType={
        id:Math.floor(Math.random()*999999),
        content:newTodo
     }
     dispatch(createTodo(payload))
     setnewTodo('');
  }

  return (
    <div>
       <input type="text" value={newTodo} placeholder="Todo elave et"
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setnewTodo(e.target.value)}/>

       <button onClick={createTodoHandle}>Add</button>
    </div>
  )
}

export default TodoCreate
