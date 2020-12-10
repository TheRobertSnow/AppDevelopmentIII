import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Menu extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Cinemas')}>
          <Text>Cinemas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Upcoming')}>
          <Text>Upcoming Movies</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Menu;
