import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Upcoming from '../Upcoming';

class UpcomingList extends React.Component {
  render() {
    return (
      <View>
        <FlatList
        numColumns={1}
        data={this.props.upcoming}
        renderItem={({ item: id, poster, title, trailers }) => {
          return (
            <Upcoming
              id={id}
              thumbnail={poster}
              name={title}
              trailers={trailers}
            />
          );
        }}
        keyExtractor={ up => up.id.toString(10) }
      />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    upcoming: state.upcomingReducer,
  }
}

export default connect(mapStateToProps)(UpcomingList);
