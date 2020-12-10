import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cinemas from '../views/Cinemas';
import CinemaDetail from '../views/CinemaDetail';
import Movies from '../views/Movies';
import Menu from '../views/Menu';

const StackNavigator = createStackNavigator({
  Menu,
  Cinemas,
  CinemaDetail,
  Movies,
});

export default createAppContainer(StackNavigator);
