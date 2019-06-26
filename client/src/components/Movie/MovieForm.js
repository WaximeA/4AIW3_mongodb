import React from "react";

class MovieForm extends React.Component {

  state = {
    title: ""
  }

  handleChange = (event) => {
    this.setState({title: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.OnNew(this.state.title);
    this.setState({
      title: ""
    });

    return false;
  }

  render () {
    return <form onSubmit={this.handleSubmit}>
      <input type="text" id="title" onChange={this.handleChange} value={this.state.title}/>
      <button type="submit" value="Add">Add</button>
    </form>;
  }
}

export default MovieForm;