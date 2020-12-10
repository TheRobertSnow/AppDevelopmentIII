import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cinemas from '../views/Cinemas';
import CinemaDetail from '../views/CinemaDetail';
import MovieDetail from '../views/MovieDetail';
import Menu from '../views/Menu';
import Upcoming from '../views/Upcoming';

const StackNavigator = createStackNavigator({
  Menu,
  Cinemas,
  CinemaDetail,
  Upcoming,
  MovieDetail,
});

export default createAppContainer(StackNavigator);
