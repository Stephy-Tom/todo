import React, { useEffect, useState } from 'react'
import { deleteTodo, getTodoDetailsByid, getallTodo, updateTodoByid } from '../services/allAPI';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Listtodo({uploadStatus}) {

    const [allTodo,setAlltodo]=useState([])
    const [show, setShow] = useState(false);
    const [eachTaskValue,setTaskValue]=useState([
        {
            todoName:"",
        todoDescription:"" 
        }

    ])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const getAlltodoItem=async()=>{
         const response=await getallTodo()
       // console.log(response);
        const {data}=response
        setAlltodo(data)
        
        }
        const removeToDo=async(id)=>{
            const response=await deleteTodo(id)
            alert("Item is successfully deleted");
            getAlltodoItem();
        }
        const updateTodo=async(id)=>{
            handleClose();
            const response= await updateTodoByid(eachTaskValue.id,eachTaskValue);
            console.log(response);
            const {data}=response;
            setTaskValue(data)
            getAlltodoItem();
        } 
    const getTodoDetails =async(id)=>{
        handleShow()
        const response=await getTodoDetailsByid(id);
        const {data}=response;
        //console.log("edit");
        //console.log(data);
        setTaskValue(data)
    }

    useEffect(()=>{
       getAlltodoItem(); 
    },[uploadStatus])

    
    console.log(allTodo);

  return (
    <div>
        <table className='table mt-5'>
            <thead>
                <tr>
                    <th>*</th>
                    <th> Name</th>
                    <th> Description</th>
                    <th> Action</th>
                </tr>
            </thead>
            <tbody>
                { allTodo.map(item=>( 

               
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.todoName}</td>
                        <td>{item.todoDescription}</td>
                        <td> <Button  onClick={()=>getTodoDetails(item.id)}>
                    <i className="fa-solid fa-pen-to-square  " onClick={()=>getTodoDetailsByid(item.id)}></i>
                    </Button>
                    <Button className='ms-3' onClick={()=>removeToDo(item.id)}> <i className="fa-solid fa-trash " ></i></Button>
                    </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>TODO Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div >
    <div className='text-primary mt-5 mb-3'>
      
    </div>
    <div className='mt-3'>
    <input value={eachTaskValue.todoName} className='form-control border-primary' onChange={(e)=>setTaskValue({...eachTaskValue,todoName:e.target.value})} type='text' ></input>
    </div>
    <div className='mt-3'>
      <textarea  value={eachTaskValue.todoDescription} id="w3review" name="w3review"  rows="3" cols="30"onChange={(e)=>setTaskValue({...eachTaskValue,todoDescription:e.target.value})} className='form-control  border-primary'></textarea>
    </div>
    </div>  

    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateTodo}>
            Save Changes
          </Button>
           
        </Modal.Footer>
      </Modal>
 
    </div>
  )
}

export default Listtodo