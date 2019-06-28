const movieReducer = (state = {
  movies: [],
}, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_RECEIVED": {
      return {
        ...state,
        movies: action.payload.movies,
        received: true
      };
    }
    case "NEW_MOVIE_RECEIVED": {
      return {
        ...state,
        movies: [...state.movies, action.payload.movie]
      }
    }
    case "DELETE_MOVIE_REQUESTED": {
      return {
      ...state,
      movies: state.movies.filter(movie => {
        return movie.title !== action.payload.movie.title;
      })
     }
    }
    default:
      return state;
  }
};

export default movieReducer;