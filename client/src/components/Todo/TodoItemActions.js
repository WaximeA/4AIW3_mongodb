import React from "react";

const TodoItemActions = ({ onSelect, onDelete }) => <>
    <a onClick={onSelect}><button>✔</button></a>
    <a onClick={onDelete}><button>✖</button></a>
</>;

export default TodoItemActions;