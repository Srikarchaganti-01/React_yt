import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoItem({ todo }) {
  const [isEditble, setIsEditble] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { editTodo, delTodo, togTodo } = useTodo;

  const updateTodo = () => {
    editTodo(todo.id, { ...todo, todo: todomsg });
    setIsEditble(false);
  };
  const toggletodo = () => {
    togTodo(todo.id);
  };
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.stat ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.stat}
        onChange={toggletodo}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isEditble ? "border-black/10 px-2" : "border-transparent"
        } ${todo.stat ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isEditble}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.stat) return;

          if (isEditble) {
            updateTodo();
          } else setIsEditble((prev) => !prev);
        }}
        disabled={todo.stat}
      >
        {isEditble ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => delTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
