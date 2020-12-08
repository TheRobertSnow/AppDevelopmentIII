import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchTheaters } from '../../actions/fetchActions';

class Cinemas extends React.Component {
  render() {
    fetchTheaters("BabaBooey");
    console.log(this.props.cinemas);
    return(
      <View style={{backgroundColor: '#555', height: 200, width: 100}}>
        <Text>BabaBooey</Text>
      </View>
    );
  }
}

const mapStateToProps = reduxStoreState => {
  return { cinemas: reduxStoreState.theaterReducer };
};

export default connect(mapStateToProps, { fetchTheaters })(Cinemas);
