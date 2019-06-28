import React from "react";
import TodoItem from "./TodoItem"
import TodoForm from './TodoForm';
import TodoContext from '../../context/TodoContext';

class TodoList extends React.Component {
  static contextType = TodoContext;

  newTodo = (text) => {
    const newTodo = {text, checked: false};

    // set new state to handle the rendering and add newTodo at the end of state
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  changeTodo = (item) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.text === item.text) {
          todo.checked = !todo.checked;
        }

        return todo;
      })
    })
  }
  deleteTodo = (item) => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.text !== item.text;
      })
    })
  }

  componentDidMount() {
    this.context.loadTodos();
  }

  render() {
    return <TodoContext.Consumer >
      {(state) => <ul>
        {
          state.todos.map((item, index) =>
              <TodoItem key={index} item={item} />
          )
        }
      </ul>}
    </TodoContext.Consumer>

  }
}

export default TodoList;