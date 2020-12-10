import React from 'react';
import { Text, View } from 'react-native';
import MovieDetails from '../../components/MovieDetails';
import MovieTimes from '../../components/MovieTimes';
import { connect } from 'react-redux';

class MovieDetail extends React.Component {
  state = {
    currentMovieTimes: "",
  }

  getTimes() {
    let currentMovieTimes = [];
    for (let i = 0; i < this.props.movies.length; i++) {
      if (this.props.movies[i].id == this.props.currentMovie) {
        for (let j = 0; j < this.props.movies[i].showtimes.length; j++) {
          if (this.props.movies[i].showtimes[j].cinema.id == this.props.currentCinema) {
            for (let k = 0; k < this.props.movies[i].showtimes[j].schedule.length; k++) {
              currentMovieTimes = [...currentMovieTimes, this.props.movies[i].showtimes[j].schedule[k]];
            };
          };
        };
      };
    };
    this.setState({ currentMovieTimes });
  }

  async componentDidMount() {
    this.getTimes();
  }

  render() {
    const { currentMovieTimes } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MovieDetails/>
        <MovieTimes currentMovieTimes={currentMovieTimes}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movieReducer,
    currentCinema: state.currentCinemaReducer,
    currentMovie: state.currentMovieReducer,
  };
};

export default connect(mapStateToProps)(MovieDetail);
