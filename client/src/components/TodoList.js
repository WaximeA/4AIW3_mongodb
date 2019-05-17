import React from "react";
import TodoItem from "./TodoItem"

class TodoList extends React.Component {
  render() {
    const todos = [
      {text: "Todo 1"},
      {text: "Todo 2", checked: true}
    ]

    return <ul>
      {
        todos.map((item, index) =>
            <TodoItem key={index} {...item}/>
        )
      }
    </ul>
  }
}

export default TodoList;