import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import CinemasList from '../../components/CinemasList';

class Cinemas extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CinemasList/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    theaters: state.theaterReducer,
  };
};

export default connect(mapStateToProps)(Cinemas);
