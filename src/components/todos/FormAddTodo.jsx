import React,{useState} from 'react'
import { addTodo } from '../../store/slices/todosSlice'
import {useDispatch} from 'react-redux'

export default function FormAddTodo() {
    const dispatch = useDispatch()
    const [inputTodo,setInputTodo] = useState('')
    
    const inputTodoHandler = (e) => {
        setInputTodo(e.target.value)
    }

    const addTodoHandler = () => {
        if(inputTodo.length > 1){
            dispatch(addTodo({
                id:new Date().getTime(),
                text:inputTodo,
                done:true
            }))
            setInputTodo('')
        }
    }

  return (
    <div className="flex mt-4">
        <input onChange={inputTodoHandler} value={inputTodo} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-800" placeholder="Add Todo" />
        <button onClick={addTodoHandler} className="p-2 border-2 rounded text-teal-500 border-teal-500  hover:text-white hover:bg-teal-500">Add</button>
    </div>
)
}
