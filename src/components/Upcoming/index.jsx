import React from 'react';
import { View, Text, TouchableOpacity, Image,FlatList } from 'react-native';
import styles from './styles';
import { withNavigation } from 'react-navigation';
import { WebView } from 'react-native-webview';

class Upcoming extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.containerName}>{this.props.title}</Text>
          <Text style={styles.containerText}>Útgefin: {this.props.releaseDate}</Text>
          {
            this.props.trailers.length == 0
            ?
            <></>
            :
            this.props.trailers[0].results.length == 0
            ?
            <></>
            :
            <View style={styles.trailerContainer}>
              <Text style={styles.containerText}>Stiklur: </Text>
              <FlatList
                numColumns={1}
                data={this.props.trailers[0].results}
                renderItem={ ({ item: { id, key, name, site, size, type, url } }) => {
                  return (
                    <View>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={()=> this.props.navigation.navigate('Trailer', {uri: url})}
                      >
                        <Text style={styles.buttonText}>{name} {type} á {site}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                } }
                keyExtractor={trailer => trailer.key.toString(10)}
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
export default withNavigation(Upcoming);
