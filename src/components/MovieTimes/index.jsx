import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Times from '../Times';
import styles from './styles';

class MovieTimes extends React.Component {
  getMovie() {
    return (this.props.movies.filter(movie => movie.id == this.props.currentMovie)[0]);
  };
  getCinema() {
    return (this.props.cinemas.filter(cinema => cinema.id == this.props.currentCinema)[0]);
  };
  render(){
    return(
      <View style={styles.container}>
        <FlatList
          numColumns={1}
          data={this.props.currentMovieTimes}
          renderItem={ ({ item: { purchase_url, time } }) => {
            return (
              <Times
                purchase_url={purchase_url}
                time={time}
                movie={this.getMovie()}
                cinema={this.getCinema()}
              />
            );
          } }
          keyExtractor={movieTime => `${movieTime.purchase_url}/${movieTime.time}`}
        />
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    currentMovie: state.currentMovieReducer,
    currentCinema: state.currentCinemaReducer,
    movies: state.movieReducer,
    cinemas: state.theaterReducer,
  }
}
export default connect(mapStateToProps)(MovieTimes);
