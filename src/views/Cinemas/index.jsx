import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Cinemas extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: '#555', height: 200, width: 100}}>
        <TouchableOpacity>
          <Text>BabaBooey</Text>
        </TouchableOpacity>
      </View>
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
