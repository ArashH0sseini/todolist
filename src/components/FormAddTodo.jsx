import React from 'react'

export default function FormAddTodo() {
  return (
    <div className="flex mt-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-800" placeholder="Add Todo" />
        <button className="p-2 border-2 rounded text-teal-500 border-teal-500  hover:text-white hover:bg-teal-500">Add</button>
    </div>
)
}
