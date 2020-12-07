import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cinemas from '../views/Cinemas';
import CinemaDetail from '../views/CinemaDetail';
import Movies from '../views/Movies';

const StackNavigator = createStackNavigator({
  Cinemas,
  CinemaDetail,
  Movies,
});

export default createAppContainer(StackNavigator);
