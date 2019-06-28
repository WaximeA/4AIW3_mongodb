import React from "react";
import MovieActionContainer from './MovieActionContainer';

const MovieItem = ({movie}) => <li>
  {movie.title}
  <MovieActionContainer movie={movie}/>
</li>;

export default MovieItem;