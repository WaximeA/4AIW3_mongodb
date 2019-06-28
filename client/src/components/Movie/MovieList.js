import React from "react";
import MovieItem from './MovieItem';

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
              <MovieItem key={index} movie={item}/>
          )
        }
      </ul>}
    </>;
  }

}

export default MovieList;