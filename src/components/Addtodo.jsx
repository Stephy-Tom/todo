import React, { useState } from 'react'
import { uploadTodo } from '../services/allAPI';

function Addtodo({setUploadStatus}) {
    const [todoValue,setTodo]=useState({
        todoName:"",
        todoDescription:""
    })
    
    const handleAdd=async()=>{

        const{todoName,todoDescription}=todoValue;
        if(!todoName || !todoDescription)
            {
                alert("Please fill the form completely")
            }
            else{
                const response=await uploadTodo(todoValue);
                alert("Successfully inserted the item");
                setUploadStatus(response.data);
                setTodo({
                    todoName:"",
                    todoDescription:""
                }
                )
                console.log(response);
            }
    }
    console.log(todoValue);
  return (
    <div>
        <div className='d-block justify-content-center'>
            <div className='mt-5 mb-3'><h3 className='text-primary'>Todo Application</h3> </div>
       <div className='mt-3'><input type="text"className='form-control'onChange={(e)=>setTodo({...todoValue,todoName:e.target.value})} /></div>
       
       <div className='mt-3'>
        <textarea className='form-control' name="" id="" onChange={(e)=>setTodo({...todoValue,todoDescription:e.target.value})}></textarea></div>
       </div>
       <button className=' mt-3 btn form-control btn-primary ' onClick={handleAdd}>ADD TODO </button>
    </div>
  )
}

export default Addtodo