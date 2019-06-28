import {createContext} from "react";

const TodoContext = createContext({
  todos: [],
  loadTodos: () => {},
  newTodo: () => {},
  changeTodo: () => {},
  deleteTodo: () => {}
});

export default TodoContext;