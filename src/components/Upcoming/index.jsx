import React from 'react';
import { View, Text, TouchableOpacity, Image,FlatList } from 'react-native';
import styles from './styles';
import ReactPlayer from 'react-player'

class Upcoming extends React.Component {
  playVideo(url) {
    return (
      <ReactPlayer style={styles.reactPlayer}
        url= {url}
        width= "100%"
        height= "40%"
        playing={true}
        controls= {true}
        muted={true}
      />
    );
  };
  render() {
    return(
      <View>
        <Text>{this.props.title}</Text>
        <Text>{this.props.releaseDate}</Text>
        <Image style={styles.thumbnail}
          resizeMode="cover"
          source={{ uri: this.props.poster }}
        />
        {
          this.props.trailers.length == 0
          ?
          <View></View>
          :
          this.props.trailers[0].results.length == 0
          ?
          <View></View>
          :
          <View>
            <Text>Trailers: </Text>
            <FlatList
              numColumns={1}
              data={this.props.trailers[0].results}
              renderItem={ ({ item: { id, key, name, site, size, type, url } }) => {
                return (
                  <View>
                    <Text>{name}</Text>
                    <TouchableOpacity
                      style={styles.buttonContainer}
                      onPress={()=> this.playVideo(url)}
                    >
                      <Text>Spila Trailer</Text>
                    </TouchableOpacity>
                  </View>
                );
              } }
              keyExtractor={trailer => trailer.key.toString(10)}
            />
          </View>
        }
      </View>
    );

  }
}
/*
    <ReactPlayer
        url= {this.props.id.trailers["0"].results["0"].url}
        width= "100%"
        height= "40%"
        controls= {true}
      />
*/
export default Upcoming;
