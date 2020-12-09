import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import theaterReducer from './theaterReducer';
import tokenReducer from './tokenReducer';

export default combineReducers({
  movieReducer,
  theaterReducer,
  tokenReducer,
});
