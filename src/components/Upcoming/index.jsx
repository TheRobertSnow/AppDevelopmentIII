import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import ReactPlayer from 'react-player'

<<<<<<< HEAD
const Upcoming = ({
  thumbnail,
  name,
  releaseDate,
  trailerUri,
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
  >
    <View>
      <Text>Make stuff happen beggi!</Text>
      <Image style={styles.thumbnail}
        resizeMode="cover"
        source={{ uri: thumbnail}}
      />
      <Text>{name}</Text>
      <Text>{releaseDate}</Text>
      <ReactPlayer
        url= {trailerUri}
        width= "100%"
        height= "40%"
        controls= {true}
      />
    </View>
  </TouchableOpacity>
);
=======


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
>>>>>>> 043d3347fd6a6e2c994d43ada87cb4590f28eae7

export default Upcoming;

{/* <ReactPlayer
  url= {trailerUri}
  width= "100%"
  height= "40%"
  controls= {true}
/> */}
