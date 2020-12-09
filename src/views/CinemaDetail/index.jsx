import React from 'react';
import { Text } from 'react-native';
import CinemaDetails from '../../components/CinemaDetails';

class CinemaDetail extends React.Component {
  state = {
    currentCinema: "",
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const currentCinema = await navigation.getParam('id');
    this.setState({ currentCinema });
  }

  render() {
    const { currentCinema } = this.state;
    return (
      <CinemaDetails currentCinema={currentCinema}/>
    );
  }
}

export default CinemaDetail;
