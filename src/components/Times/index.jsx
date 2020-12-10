import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, FlatList, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';

const Times = ({
  purchase_url,
  time,
  navigation: {navigate}
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={()=> Linking.openURL(purchase_url)}
  >
    <View style={styles.button}>
      <Text style={styles.buttonText}>Time: {time}</Text>
      <Text>Purchase!</Text>
    </View>
  </TouchableOpacity>
);

export default withNavigation(Times);
