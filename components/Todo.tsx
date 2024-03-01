"use client";
import { useState } from "react";

type TodoType = {
  todo: string;
};

const Todo: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [showTodo, setShowTodo] = useState<TodoType[]>([]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleAddTodo = (event: React.FormEvent) => {
    if (todo === "") {
      alert("Please Add todo");
    } else {
      event.preventDefault();
      const newTodo: TodoType = { todo };
      setShowTodo([...showTodo, newTodo]);
      setTodo("");
    }
  };

  return (
    <>
      <form
        noValidate
        onSubmit={handleAddTodo}
        className="flex items-center max-w-lg mx-auto"
      >
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <input
            onChange={handleInput}
            type="text"
            name="todo"
            value={todo}
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter todo here..."
            required
          />
        </div>
        <div className="relative w-md">
          <button
            type="submit"
            className="p-2.5 ms-2 w-400 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Todo
          </button>
        </div>
      </form>
      {showTodo &&
        showTodo.map((todo: TodoType, index: number) => (
          <div key={index}>
            <div className="flex items-center">
              <div>
                <h4>{todo.todo}</h4>
              </div>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Red
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default Todo;
