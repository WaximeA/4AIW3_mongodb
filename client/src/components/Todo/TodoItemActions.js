import React from "react";
import TodoContext from '../../context/TodoContext'

const TodoItemActions = ({ todo }) => <TodoContext.Consumer>
  {
      ({changeTodo, deleteTodo}) => <>
          <button onClick={() => changeTodo(todo)}><span>✔</span></button>
          <button onClick={() => deleteTodo(todo)}><span>✖</span></button>
    </>
  }
</TodoContext.Consumer>;

export default TodoItemActions;