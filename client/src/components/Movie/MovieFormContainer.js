import React from 'react';
import {connect} from 'react-redux';
import {newMovie} from '../../redux/actions/movies';
import MovieForm from './MovieForm';

const mapDispatchToProps = (dispatch) => {
  return {
    onNew: (movie) => dispatch(newMovie(movie, dispatch))
  }
}

export default connect(undefined, mapDispatchToProps)(MovieForm);