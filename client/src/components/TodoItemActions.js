import React from "react";

class TodoItemActions extends React.Component {
  render() {
    const { onSelect, onDelete } = this.props;

    return <>
      <a onClick={onSelect}><button>✔</button></a>
      <a onClick={onDelete}><button>✖</button></a>
    </>;
  }
}

export default TodoItemActions;