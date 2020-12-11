import React from 'react';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { assignCurrentCinema } from '../../actions/cinemaActions';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class Cinema extends React.Component {
  assignAndNavigate() {
    this.props.assignCurrentCinema(this.props.id);
    this.props.navigation.navigate('CinemaDetail');
  }
  render(){
    return(
      <TouchableOpacity
        style={styles.cinemaContainer}
        activeOpacity={0.8}
        onPress={() => this.assignAndNavigate()}
      >
          <Text style={styles.cinemaContainerText}>{this.props.name}</Text>
          <Text style={styles.cinemaContainerLink}>{this.props.website}</Text>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentCinema: state.currentCinemaReducer,
  }
}

export default connect(mapStateToProps, {assignCurrentCinema})(withNavigation(Cinema));
