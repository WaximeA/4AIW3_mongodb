import React from "react";
import TodoItemActions from './TodoItemActions';

const TodoItem = ({item}) => <li>
        <div style={{ opacity: item.checked ? 0.5 : 1 }}>
          {item.text}
        </div>
        <TodoItemActions todo={item}/>
</li>;

export default TodoItem;