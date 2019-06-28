
export function fetchMovies(dispatch) {
  fetch("http://localhost:3000/movies", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application-json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjE1NzE1NzMsImV4cCI6MTU2MTU3NTE3M30.N9Fp7JlLieyO829i8BTRu6-LJHDRV1_ERoO9NfLVeic"
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
      type: "FETCH_MOVIES_RECEIVED",
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

export function newMovie(title, dispatch) {
  fetch("http://localhost:3000/movies", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application-json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjE1NzE1NzMsImV4cCI6MTU2MTU3NTE3M30.N9Fp7JlLieyO829i8BTRu6-LJHDRV1_ERoO9NfLVeic"
    },
    mode: 'cors',
    body: JSON.stringify({
      "title": title
    })
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
        movie: data
      }
    })
  })
  .catch(() => console.log('Error'));

  return {
    type: "NEW_MOVIE_REQUESTED"
  }
}

export function deleteMovie(movie, dispatch) {
  fetch("http://localhost:3000/movies/" + movie.title, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application-json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjE1NzE1NzMsImV4cCI6MTU2MTU3NTE3M30.N9Fp7JlLieyO829i8BTRu6-LJHDRV1_ERoO9NfLVeic"
    },
    mode: 'cors'
  })
  .then(response => {
    if (response.status !== 204) {
      throw new Error('Unable to fetch')
    } else {
      return Promise.resolve()
    }
  })
  .then(() => {
    dispatch({
      type: "DELETE_MOVIE_RECEIVED",
      payload: {
        movie
      }
    })
  })
  .catch(() => console.log('Error'));

  return {
    type: "DELETE_MOVIE_REQUESTED"
  }
}