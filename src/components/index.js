import React from 'react'
import Header from './todos/Header'
import TodosList from './todos/TodosList'
import FormAddTodo from './todos/FormAddTodo'
import { useSelector } from 'react-redux'

export default function Index() {
    const todos = useSelector(state => state.todos.list)
    console.log(todos)
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
