import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

class MovieDetails extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <FlatList
          scrollEnabled={false}
          numColumns={1}
          data={this.props.movies.filter(movie => movie.id == this.props.currentMovie)}
          renderItem={ ({ item: { id, title, poster, plot, durationMinutes, year, genres } }) => {
            return (
              <View style={styles.innerContainer}>
                <View style={styles.infoContainer}>
                  <Text style={styles.containerName}>{title}</Text>
                  <Text style={styles.containerText}>{plot}</Text>
                  <Text style={styles.containerText}>Lengd: {durationMinutes} minutes</Text>
                  <Text style={styles.containerText}>Útgefin árið: {year}</Text>
                  {
                    genres[0].ID == null
                    ?
                    <></>
                    :
                    <View style={styles.genreContainer}>
                      <Text>Tegundir: </Text>
                      <FlatList
                        numColumns={1}
                        data={genres}
                        renderItem={ ({ item: { ID, Name } }) => {
                          return (
                            <Text>{Name}</Text>
                          );
                        } }
                        keyExtractor={genre => genre.ID.toString(10)}
                      />
                    </View>
                  }
                </View>
                <View style={styles.imageContainer}>
                  <Image style={styles.poster}
                    resizeMode="cover"
                    source={{ uri: poster }}
                  />
                </View>
              </View>
            );
          } }
          keyExtractor={cinema => cinema.id.toString(10)}
          />
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    movies: state.movieReducer,
    currentMovie: state.currentMovieReducer,
  }
}
export default connect(mapStateToProps)(MovieDetails);
