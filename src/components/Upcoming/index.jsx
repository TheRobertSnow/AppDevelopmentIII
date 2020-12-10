import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import ReactPlayer from 'react-player'

class Upcoming extends React.Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
      >
        <View>
          <Image style={styles.thumbnail}
            resizeMode="cover"
            source={{ uri: this.props.thumbnail}}
          />
          <Text>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Upcoming;

{/* <ReactPlayer
  url= {trailerUri}
  width= "100%"
  height= "40%"
  controls= {true}
/> */}
