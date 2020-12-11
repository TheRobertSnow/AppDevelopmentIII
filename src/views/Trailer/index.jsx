import React from 'react';
import UpcomingTrailer from '../../components/UpcomingTrailer';

class Trailer extends React.Component {
  state = {
    currentTrailerUri: "",
  }
  async componentDidMount() {
    const { navigation } = this.props;
    const currentTrailerUri = await navigation.getParam('uri');
    this.setState({ currentTrailerUri });
  }

  render() {
    const { currentTrailerUri } = this.state;
    return (
      <UpcomingTrailer currentTrailerUri={currentTrailerUri}/>
    );
  }
}

export default Trailer;
