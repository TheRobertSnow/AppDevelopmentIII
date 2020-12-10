import React from 'react';
import { Text, View } from 'react-native';
import MovieDetails from '../../components/MovieDetails';
import MovieTimes from '../../components/MovieTimes';
import { connect } from 'react-redux';

class MovieDetail extends React.Component {
  state = {
    currentMovie: "",
    currentCinema: "",
    currentMovieTimes: "",
  }

  getTimes() {
    let currentMovieTimes = [];
    for (let i = 0; i < this.props.movies.length; i++) {
      if (this.props.movies[i].id == this.state.currentMovie) {
        for (let j = 0; j < this.props.movies[i].showtimes.length; j++) {
          if (this.props.movies[i].showtimes[j].cinema.id == this.state.currentCinema) {
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
    const { navigation } = this.props;
    const currentMovie = await navigation.getParam('id');
    const currentCinema = await navigation.getParam('currentCinema');
    this.setState({ currentMovie, currentCinema });
    this.getTimes();
  }

  render() {
    const { currentMovie, currentCinema, currentMovieTimes } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MovieDetails currentMovie={currentMovie}/>
        <MovieTimes currentMovie={currentMovie} currentMovieTimes={currentMovieTimes}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movieReducer,
  };
};

export default connect(mapStateToProps)(MovieDetail);
