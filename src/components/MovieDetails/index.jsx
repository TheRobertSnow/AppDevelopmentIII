import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

class MovieDetails extends React.Component {
  render(){
    return(
      <View>
        <FlatList
          scrollEnabled={false}
          numColumns={1}
          data={this.props.movies.filter(movie => movie.id == this.props.currentMovie)}
          renderItem={ ({ item: { id, title, poster, plot, durationMinutes, year, genres } }) => {
            return (
              <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.container}>
                  <Text style={styles.containerName}>{title}</Text>
                  <View style={styles.innerContainer}>
                    <View style={styles.infoContainer}>
                      <Text style={styles.containerText}>{plot}</Text>
                      <Text style={styles.containerText}>Lengd: {durationMinutes} minutes</Text>
                      <Text style={styles.containerText}>Útgefin árið: {year}</Text>
                      {
                        genres[0].ID == null
                        ?
                        <></>
                        :
                        <View>
                          <Text style={styles.containerText}>Tegundir: </Text>
                          <FlatList
                            numColumns={1}
                            data={genres}
                            renderItem={ ({ item: { ID, Name } }) => {
                              return (
                                <Text style={styles.containerText}>{Name}</Text>
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
                </View>
              </TouchableOpacity>
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
