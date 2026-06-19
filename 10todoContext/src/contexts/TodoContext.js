import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todoMsg: "Todo Task msg",
      stat: false,
    },
  ],
  addTodo: (todoMsg) => {},
  delTodo: (id) => {},
  togTodo: (id) => {},
  editTodo: (id, todoMsg) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
