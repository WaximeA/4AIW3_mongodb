
export function fetchMovies(dispatch) {
  fetch("http://localhost:3000/movies", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application-json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NTk5MTAwMDksImV4cCI6MTU1OTkxMzYwOX0.yQt8P5ghtL8GWHEWTdPUOQ0R6CIzZCCJMFFDrjQ_6Ho"
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