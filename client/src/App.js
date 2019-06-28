import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/Todo/TodoList';
import MovieList from './components/Movie/MovieListContainer';
import MovieForm from './components/Movie/MovieFormContainer';
import TodoProvider from './context/TodoProvider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <div className="todolist">
            <h1>Todo list</h1>
            <TodoProvider/>
          </div>
          <div className="movielist">
            <h1>Add new movie</h1>
            <MovieForm/>
            <h1>Movie list</h1>
            <MovieList/>
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;
