import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Cinema = ({
  id,
  name,
  website,
  navigation: {navigate}
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => navigate('CinemaDetail', { id: id })}
  >
    <View style={styles.cinemaContainer}>
      <Text style={styles.cinemaContainerText}>{name}</Text>
      <Text style={styles.cinemaContainerText}>{website}</Text>
    </View>
  </TouchableOpacity>
);

export default withNavigation(Cinema);
