/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react'
import Header from './todos/header'
import TodosList from './todos/todosList'
import FormAddTodo from './todos/formAddTodo'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { setTodos } from './../store/slices/todosSlice'
import {useDispatch} from 'react-redux'

export default function Index() {
    const dispatch = useDispatch();

    useEffect(()=>{
        getUsers();
    },[])

    const getUsers = async () => {
        let res = await axios.get('https://62b08df6efe73bc8bc252569.endapi.io/todos')
        dispatch(setTodos(res.data.data))
    }
    const todos = useSelector(state => state.todos.list)
    return (
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-3xl border">
                <div className="mb-4">
                    <Header />
                    <FormAddTodo />
                </div>
                <div>
                    {
                        todos.map(todo=><TodosList key={todo.id} todo={todo} />)
                    }
                </div>
            </div>
        </div>
    )
}
