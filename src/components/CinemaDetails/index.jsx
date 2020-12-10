import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

class CinemaDetails extends React.Component {
  render(){
    return(
      <View>
        <FlatList
          scrollEnabled={false}
          numColumns={1}
          data={this.props.cinemas.filter(cinema => cinema.id == this.props.currentCinema)}
          renderItem={ ({ item: { id, name, description, address, city, phone, website } }) => {
            return (
              <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.container}>
                  <Text style={styles.containerName}>{name}</Text>
                  <Text style={styles.containerText}>{description}</Text>
                  <Text style={styles.containerText}>{address}</Text>
                  <Text style={styles.containerText}>SKOÐA MEÐ ADDRESS, þvi address fieldinn i database er actually 'address ', s.s með eh auka bili for some reason</Text>
                  <Text style={styles.containerText}>{city}</Text>
                  <Text style={styles.containerText}>{phone}</Text>
                  <Text style={styles.containerText}>{website}</Text>
                </View>
              </TouchableOpacity>
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
  }
}
export default connect(mapStateToProps)(CinemaDetails);
