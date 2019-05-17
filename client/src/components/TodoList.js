import React from "react";
import TodoItem from "./TodoItem"

class TodoList extends React.Component {
  state = {
    todos: [
      {text: "Todo 1"},
      {text: "Todo 2", checked: true}
    ]
  }

  render() {
    return <ul>
      {
        this.state.todos.map((item, index) =>
            <TodoItem key={index} {...item}/>
        )
      }
    </ul>
  }
}

export default TodoList;