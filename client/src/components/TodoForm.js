import React from "react";

class TodoForm extends React.Component {

  state = {
    text: "",
  }

  handleChange = (event) => {
    this.setState({text: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      text: ""
    });
    this.props.onNew(this.state.text);

    return false;
  }

  render () {
    return <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.handleChange} value={this.state.text}/>
      <button type="submit" value="Add">Add</button>
    </form>
  }
}

export default TodoForm;