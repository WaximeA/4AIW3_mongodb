const movieReducer = (state = {
  movies: [],
}, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_RECEIVER": {
      return {
        ...state,
        movies: action.payload,
        received: true
      };
    }
    case "NEW_MOVIE_RECEIVED": {
      return {
        ...state,
        movies: [...state.movies, action.payload.movie]
      }
    }
    default:
      return state;
  }
};

export default movieReducer;