import React, {useContext, useEffect, useMemo} from "react";
import TodoItem from "./TodoItem"
import TodoForm from './TodoForm';
import TodoContext from '../../context/TodoContext';

const TodoList = () =>  {
  const context = useContext(TodoContext);

  useEffect(() => {
    context.loadTodos();
  }, []);

  return useMemo(() => <ul>
      {
        context.todos.map((item, index) =>
            <TodoItem key={index} item={item} />
        )
      }
    </ul>, [context.todos]);
}

export default TodoList;