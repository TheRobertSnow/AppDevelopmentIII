import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Movie from '../Movie';
import styles from './styles';

class MovieList extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <FlatList
          numColumns={1}
          data={this.props.currentMovies}
          renderItem={ ({ item: { id, title, poster, year, genres } }) => {
            return (
              <Movie
                id={id}
                title={title}
                poster={poster}
                year={year}
                genres={genres}
                currentCinema={this.props.currentCinema}
              />
            );
          } }
          keyExtractor={movie => movie.id.toString(10)}
        />
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    movies: state.upcomingReducer,
  }
}
export default connect(mapStateToProps)(MovieList);
