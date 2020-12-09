import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Cinema from '../Cinema';

const styles = StyleSheet.create({
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
              <Cinema
                id={id}
                name={name}
                website={website}
              />
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
