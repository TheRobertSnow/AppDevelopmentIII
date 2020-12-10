import React from 'react';
import { View } from 'react-native';
import CinemaDetails from '../../components/CinemaDetails';
import MovieList from '../../components/MovieList';
import { connect } from 'react-redux';

class CinemaDetail extends React.Component {
  state = {
    currentMovies: "",
  }

  getMovies() {
    let currentMovies = [];
    for (let i = 0; i < this.props.movies.length; i++) {
      for (let j = 0; j < this.props.movies[i].showtimes.length; j++) {
        if (this.props.movies[i].showtimes[j].cinema.id == this.props.currentCinema) {
          currentMovies = [...currentMovies, this.props.movies[i]];
        };
      };
    };
    this.setState({ currentMovies });
  }

  async componentDidMount() {
    this.getMovies();
  }

  render() {
    const { currentMovies } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <CinemaDetails/>
        <MovieList currentMovies={currentMovies}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movieReducer,
    currentCinema: state.currentCinemaReducer,
  };
};

export default connect(mapStateToProps)(CinemaDetail);
