import React from "react";

export default function TodosList() {
  return (
    <>
      <div className="flex mb-4 items-center">
        <p className="mr-auto text-gray-700">
          Add another component to Tailwind Components
        </p>
        <button className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600">
          Done
        </button>
        <button className="p-1 px-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600">
          Remove
        </button>
      </div>
      <div className="flex justify-between mb-4 items-center">
        <p className="mr-auto line-through text-green-600">
          Submit Todo App Component to Tailwind Components
        </p>
        <div className="flex items-center">
          <button className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray-400 hover:bg-gray-400">
            Not Done
          </button>
          <button className="p-1 px-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600">
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
