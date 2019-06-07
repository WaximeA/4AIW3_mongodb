import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/Todo/TodoList';
import MovieList from './components/Movie/MovieListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <div className="todolist">
            <h1>Todo list</h1>
            <TodoList/>
          </div>
          <div className="movielist">
            <h1>Movie list</h1>
            <MovieList/>
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;
