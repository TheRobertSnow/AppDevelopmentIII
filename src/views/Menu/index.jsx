import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import icon from '../../resources/12759.jpg';

class Menu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={icon} />
          <Text style={styles.title}>Dr. Cinema</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Cinemas')}>
            <Text style={styles.buttonText}>Cinemas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Upcoming')}>
            <Text style={styles.buttonText}>Upcoming Movies</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Menu;
