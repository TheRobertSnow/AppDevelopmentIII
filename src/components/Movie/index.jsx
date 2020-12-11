import React from 'react';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { assignCurrentMovie } from '../../actions/movieActions';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';


class Movie extends React.Component {
  assignAndNavigate() {
    this.props.assignCurrentMovie(this.props.id);
    this.props.navigation.navigate('MovieDetail');
  }
  render(){
    return(
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.8}
        onPress={() => this.assignAndNavigate()}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.containerName}>{this.props.title}</Text>
          <Text style={styles.containerText}>Útgefin árið: {this.props.year}</Text>
          {
            this.props.genres[0].ID == null
            ?
            <></>
            :
            <View style={styles.genreContainer}>
              <Text>Tegundir: </Text>
              <FlatList
                numColumns={1}
                data={this.props.genres}
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
            source={{ uri: this.props.poster }}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentMovie: state.currentMovieReducer,
  }
}

export default connect(mapStateToProps, {assignCurrentMovie})(withNavigation(Movie));
