import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import theaterReducer from './theaterReducer';

export default combineReducers({
  movieReducer,
  theaterReducer,
});
