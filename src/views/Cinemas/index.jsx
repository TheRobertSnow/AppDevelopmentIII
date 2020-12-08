import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { fetchTheaters, fetchToken } from '../../actions/fetchActions';

class Cinemas extends React.Component {
  componentDidMount() {
    this.props.fetchToken();
    console.log('BabaBooey');
    console.log(this.props);
  }

  render() {
    console.log(this.props);
    return (
      <View style={{backgroundColor: '#555', height: 200, width: 100}}>
        <TouchableOpacity>
          <Text>BabaBooey</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    cinemas: state.cinemas,
    token: state.token,
  };
}

const mapDispatchToProps = {
  fetchTheaters,
  fetchToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cinemas);
