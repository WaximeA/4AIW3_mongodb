import React, {useContext, useCallback} from "react";
import TodoContext from '../../context/TodoContext'

const TodoItemActions = ({ todo }) => {
      const context = useContext(TodoContext);
      const handleChange = useCallback(() => context.changeTodo(todo), [context.changeTodo]);
      const handleDelete = useCallback(() => context.deleteTodo(todo), [context.deleteTodo]);

      return <>
          <button onClick={handleChange}><span>✔</span></button>
          <button onClick={handleDelete}><span>✖</span></button>
    </>
}

export default TodoItemActions;