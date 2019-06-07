import React from "react";
import TodoItemActions from './TodoItemActions';

const TodoItem = ({item, onSelect, onDelete}) => <li>
        <div style={{ opacity: item.checked ? 0.5 : 1 }} onClick={() => onSelect(item)}>
          {item.text}
        </div>
        <TodoItemActions onSelect={() => onSelect(item)} onDelete={() => onDelete(item)}/>
</li>;

export default TodoItem;