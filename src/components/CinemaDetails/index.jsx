import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

class CinemaDetails extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <FlatList
          scrollEnabled={false}
          numColumns={1}
          data={this.props.cinemas.filter(cinema => cinema.id == this.props.currentCinema)}
          renderItem={ ({ item: { id, name, description, address, city, phone, website } }) => {
            return (
              <View>
                <Text style={styles.containerName}>{name}</Text>
                <Text style={styles.containerText}>{description}</Text>
                <Text style={styles.containerText}>Heimilisfang: {address}, {city}</Text>
                <Text style={styles.containerText}>Símanúmer: {phone}</Text>
                <Text style={styles.containerText}>Vefsíða: {website}</Text>
              </View>
            );
          } }
          keyExtractor={cinema => cinema.id.toString(10)}
        />
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    cinemas: state.theaterReducer,
    currentCinema: state.currentCinemaReducer,
  }
}
export default connect(mapStateToProps)(CinemaDetails);
