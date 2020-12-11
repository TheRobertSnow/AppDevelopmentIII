import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';

class Times extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.containerText}>Bíómynd: {this.props.movie.title}</Text>
          <Text style={styles.containerText}>Bíó: {this.props.cinema.name}</Text>
          <Text style={styles.containerText}>Klukkan: {this.props.time}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={()=> Linking.openURL(this.props.purchase_url)}
        >
          <Text style={styles.buttonText}>Kaupa Miða</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Times;
