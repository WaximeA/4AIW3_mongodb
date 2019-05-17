import React from "react";
import TodoItem from "./TodoItem"
import TodoForm from './TodoForm';

class TodoList extends React.Component {
  state = {
    todos: [
      {text: "Todo 1"},
      {text: "Todo 2", checked: true}
    ]
  }

  handleNew = (text) => {
    const newTodo = {text, checked: false};

    // set new state to handle the rendering and add newTodo at the end of state
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return <>
      <TodoForm onNew={this.handleNew}/>
      <ul>
        {
          this.state.todos.map((item, index) =>
              <TodoItem key={index} {...item}/>
          )
        }
      </ul>
   </>;
  }
}

export default TodoList;