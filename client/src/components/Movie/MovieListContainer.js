import React from 'react';
import MovieList from '../Movie/MovieList';
import {connect} from 'react-redux';
import {fetchMovies} from '../../redux/actions/movies';

const mapStateToProps = (state) => {
  return {
    movies: state.movieReducer.movies,
    received: state.movieReducer.received
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMovies: () => dispatch(fetchMovies(dispatch))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);