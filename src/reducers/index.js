import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import theaterReducer from './theaterReducer';
import tokenReducer from './tokenReducer';
import upcomingReducer from './upcomingReducer';
import currentCinemaReducer from './currentCinemaReducer';
import currentMovieReducer from './currentMovieReducer';

export default combineReducers({
  movieReducer,
  theaterReducer,
  tokenReducer,
  upcomingReducer,
  currentCinemaReducer,
  currentMovieReducer,
});
