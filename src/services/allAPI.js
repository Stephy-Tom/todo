import { commonAPI } from "./commonAPI";


const serverURL= 'http://localhost:5000';

export const uploadTodo = async(reqBody) =>{
    return await commonAPI('POST',`${serverURL}/todolist`,reqBody)
}
export const getallTodo = async() =>{
    return await commonAPI('GET',`${serverURL}/todolist`,"")
}

export const deleteTodo = async(id) =>{
    return await commonAPI('DELETE',`${serverURL}/todolist/${id}`,{})
}

export const getTodoDetailsByid = async(id) =>{
    return await commonAPI('GET',`${serverURL}/todolist/${id}`,{})
}

export const updateTodoByid = async(id,body) =>{
    return await commonAPI('PUT',`${serverURL}/todolist/${id}`,body)
}