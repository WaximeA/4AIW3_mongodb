import React from 'react';
import {connect} from 'react-redux';
import {deleteMovie} from '../../redux/actions/movies';
import MovieAction from './MovieAction';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: () => dispatch(deleteMovie(ownProps.movie, dispatch))
  }
}

export default connect(undefined, mapDispatchToProps)(MovieAction);