import React from 'react';
import { View } from 'react-native';
import CinemaDetails from '../../components/CinemaDetails';
import MovieList from '../../components/MovieList';
import { connect } from 'react-redux';

class CinemaDetail extends React.Component {
  state = {
    currentCinema: "",
    currentMovies: "",
  }

  getMovies() {
    let currentMovies = [];
    for (let i = 0; i < this.props.movies.length; i++) {
      for (let j = 0; j < this.props.movies[i].showtimes.length; j++) {
        if (this.props.movies[i].showtimes[j].cinema.id == this.state.currentCinema) {
          currentMovies = [...currentMovies, this.props.movies[i]];
        };
      };
    };
    this.setState({ currentMovies });
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const currentCinema = await navigation.getParam('id');
    this.setState({ currentCinema });
    this.getMovies();
  }

  render() {
    const { currentCinema, currentMovies } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <CinemaDetails currentCinema={currentCinema}/>
        <MovieList currentCinema={currentCinema} currentMovies={currentMovies}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movieReducer,
  };
};

export default connect(mapStateToProps)(CinemaDetail);
