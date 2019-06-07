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
    default:
      return state;
  }
};

export default movieReducer;