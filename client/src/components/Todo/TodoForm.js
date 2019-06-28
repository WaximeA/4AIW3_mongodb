import React, {useState, useContext} from "react";
import TodoContext from '../../context/TodoContext'

const TodoForm = () => {

  const [text, setText] = useState('');
  const context = useContext(TodoContext);

  const handleChange = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    context.newTodo(text);
    setText('');
    return false;
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleChange} value={text}/>
    <button type="submit" value="Add">Add</button>
  </form>
}

export default TodoForm;