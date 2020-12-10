import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Upcoming = ({
  tumbnail,
  name,
  releaseDate,
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
  >
    <View>
      <Text>Make stuff happen beggi!</Text>
    </View>
  </TouchableOpacity>
);

export default Upcoming;
