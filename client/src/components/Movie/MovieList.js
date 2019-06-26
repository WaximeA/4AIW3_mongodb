import React from "react";

class MovieList extends React.Component {

  componentDidMount() {
    this.props.loadMovies();
  }

  render() {
    const {received, movies} = this.props;

    return <>
      {!received && <span>Loading...</span>}
      {received && <ul>
        {
          movies.map((item, index) =>
              <li key={index}>
                {item.title}
              </li>
          )
        }
      </ul>}
    </>;
  }

}

export default MovieList;