
export function fetchMovies(dispatch) {
  fetch("http://localhost:3000/movies", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application-json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjE1NjY5MjcsImV4cCI6MTU2MTU3MDUyN30.fFJj_jg-GpIDNEaG7H2aoDyUZUaDq30YcLE7ViLysdc"
    },
    mode: 'cors'
  })
  .then(response => {
    if (response.status !== 200) {
      throw new Error('Unable to fetch')
    } else {
      return response.json();
    }
  })
  .then(data => {
    dispatch({
      type: "FETCH_MOVIES_REQUESTED",
      payload: {
        movies: data,
      }
    })
  })
  .catch(() => console.log('Error'));

  return {
    type: "FETCH_MOVIES_REQUESTED"
  }
}

export function newMovie(movie, dispatch) {
  fetch("http://localhost:3000/movies", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application-json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjE1NjY5MjcsImV4cCI6MTU2MTU3MDUyN30.fFJj_jg-GpIDNEaG7H2aoDyUZUaDq30YcLE7ViLysdc"
    },
    mode: 'cors',
    body: JSON.stringify(movie)
  })
  .then(response => {
    if (response.status !== 201) {
      throw new Error('Unable to fetch')
    } else {
      return response.json();
    }
  })
  .then(data => {
    dispatch({
      type: "NEW_MOVIE_RECEIVED",
      payload: {
        movie: data,
      }
    })
  })
  .catch(() => console.log('Error'));

  return {
    type: "NEW_MOVIE_RECEIVED"
  }
}