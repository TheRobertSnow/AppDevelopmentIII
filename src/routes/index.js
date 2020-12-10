import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cinemas from '../views/Cinemas';
import CinemaDetail from '../views/CinemaDetail';
import MovieDetail from '../views/MovieDetail';

const StackNavigator = createStackNavigator({
  Cinemas,
  CinemaDetail,
  MovieDetail,
});

export default createAppContainer(StackNavigator);
