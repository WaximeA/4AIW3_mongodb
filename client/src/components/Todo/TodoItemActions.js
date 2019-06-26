import React from "react";

const TodoItemActions = ({ onSelect, onDelete }) => <>
    <button onClick={onSelect}><button>✔</button></button>
    <button onClick={onDelete}><button>✖</button></button>
</>;

export default TodoItemActions;