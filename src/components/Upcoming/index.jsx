import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import ReactPlayer from 'react-player'

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

export default Upcoming;
