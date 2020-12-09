import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import CinemasList from '../../components/CinemasList';

class Cinemas extends React.Component {
  render() {
    return (
      <CinemasList />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    theaters: state.theaterReducer,
  };
};

// const mapStateToProps = ({ token }) => ({ token });

// const mapDispatchToProps = {
//   fetchToken,
// };

export default connect(mapStateToProps)(Cinemas);
