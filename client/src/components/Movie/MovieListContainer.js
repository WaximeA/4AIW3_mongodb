import React from 'react';
import MovieList from '../Movie/MovieList';
import {connect} from 'react-redux';
import {fetchMovies} from '../../redux/actions/movies';

class MovieListContainer extends React.Component {
    render(){
      return <>
        {!this.props.received && <span>Loading...</span>}
        {this.props.received && <MovieList movies={this.props.movies}/>}
      </>
    }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movieReducer.movies,
    received: state.movieReducer.received
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMovies: dispatch(fetchMovies(dispatch))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);