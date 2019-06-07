import React from 'react';
import MovieList from '../Movie/MovieList';

class MovieListContainer extends React.Component {
    state = {
      movies: []
    }

    componentDidMount() {
      fetch("http://localhost:3000/movies", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application-json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NTk4OTg3OTcsImV4cCI6MTU1OTkwMjM5N30.YBxa3G5pCTNVj-SkUMRMyRlW1gKTQ7XUh_aryu8Zwjg"
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
        this.setState({
          movies: data,
          received: true
        })
      })
      .catch(() => console.log('Error'));
    }

    render(){
      return <>
        {!this.state.received && <span>Loading...</span>}
        {this.state.received && <MovieList movies={this.state.movies}/>}
      </>
    }
}

export default MovieListContainer;