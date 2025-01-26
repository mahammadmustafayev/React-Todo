import { CiCircleRemove } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { TodoType } from "../Types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById ,updateTodoById} from "../redux/todoslice";
import { useState } from "react";




interface TodoProps{
    todoProps:TodoType
}

function Todo({todoProps}:TodoProps) {
    const dispatch=useDispatch();
    const removeTodoHandle=()=>{
      dispatch(removeTodoById(todoProps.id))
    }

    const [editable, setEditable] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todoProps.content)

  const updateTodoHandle=()=>{
     const payload={
        id:todoProps.id,
        content:editTodo
     }
     dispatch(updateTodoById(payload))
     setEditable(false)
  }
  return (
    <div style={
        {
            marginTop:'1em',
            width:'15em',
            height:'3em',
            border:'1px solid black',
            borderRadius:'5px',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center'
        }}>
          {editable 
              ? <input type="text" 
              value={editTodo} 
              onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setEditTodo(e.target.value)} />  
              : <span style={{fontSize:'1.3em'}}>{todoProps.content}</span> }
            
            <div style={{fontSize:'1.7em',cursor:'pointer'}}>
              <CiCircleRemove style={{color:'red'}} onClick={removeTodoHandle}/>
              {editable 
                 ? 
                 <FaCircleCheck style={{color:'green'}} onClick={updateTodoHandle}/> 
                 : 
                 <FaEdit onClick={()=>setEditable(true)} style={{color:'yellow'}}/>}
              
            </div>
        </div>
  )
}

export default Todo
