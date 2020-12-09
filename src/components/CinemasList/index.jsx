import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  cinemaContainer: {
    backgroundColor: '#fff',
    marginBottom: 10,
    flexDirection: 'row',
    padding: 15,
    borderRadius: 10,
    width: windowWidth - 100,
    alignItems: 'center',
  },
  cinemaContainerText: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 16,
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

class CinemasList extends React.Component {
  render() {
    return (
      <View style={styles.listContainer}>
        <FlatList
          numColumns={1}
          data={this.props.cinemas}
          renderItem={({ item: { id, name, website } }) => {
            return (
              <TouchableOpacity>
                <View style={styles.cinemaContainer}>
                  <Text style={styles.cinemaContainerText}>{ name }</Text>
                  <Text style={styles.cinemaContainerText}>{ website }</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        keyExtractor={ cinema => cinema.id.toString(10) }/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cinemas: state.theaterReducer,
  }
}

export default connect(mapStateToProps)(CinemasList);
