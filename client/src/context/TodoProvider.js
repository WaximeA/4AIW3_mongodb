import React from 'react';
import TodoContext from './TodoContext';
import TodoList from '../components/Todo/TodoList';

class TodoProvider extends React.Component {
  state = {
    todos: [],
    loadTodos: () => {
      this.setState({
        todos: [
          {text: 'todo 1 avec les contextes :)'},
          {text: 'todo 2', checked: true, test: true},
        ],
      });
    },
    newTodo: (text) => {
      const newTodo = {text, checked: false};

      // set new state to handle the rendering and add newTodo at the end of state
      this.setState({
        todos: [...this.state.todos, newTodo]
      })
    },
    changeTodo: (item) => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.text === item.text) {
            todo.checked = !todo.checked;
          }

          return todo;
        })
      })
    },
    deleteTodo: (item) => {
      this.setState({
        todos: this.state.todos.filter(todo => {
          return todo.text !== item.text;
        })
      })
    }
  };

  render() {
    return <TodoContext.Provider value={this.state}>
      <TodoList/>
    </TodoContext.Provider>
  }
}

export default TodoProvider;