import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

class ContactDetail extends React.Component {
  render(){
    return(
      <View>
        <FlatList
          numColumns={1}
          data={this.props.cinemas.filter(cinema => cinema.id == this.props.currentCinema)}
          renderItem={ ({ item: { id, name, description, address, city, phone, website } }) => {
            return (
              <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.container}>
                  <Text style={styles.containerText}>{id}</Text>
                  <Text style={styles.containerText}>{name}</Text>
                  <Text style={styles.containerText}>{description}</Text>
                  <Text style={styles.containerText}>{address}</Text>
                  // skoða með þetta, þvi address fieldinn i database er actually 'address ', s.s með eh auka bili for some reason
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
export default connect(mapStateToProps)(ContactDetail);