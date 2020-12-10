import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Times from '../Times';
import styles from './styles';

class MovieTimes extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <FlatList
          numColumns={1}
          data={this.props.currentMovieTimes}
          renderItem={ ({ item: { purchase_url, time } }) => {
            return (
              <Times
                purchase_url={purchase_url}
                time={time}
              />
            );
          } }
          keyExtractor={movieTime => `${movieTime.purchase_url}/${movieTime.time}`}
        />
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    movies: state.upcomingReducer,
  }
}
export default connect(mapStateToProps)(MovieTimes);
