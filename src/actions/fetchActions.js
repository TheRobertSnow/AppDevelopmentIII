import * as constants from '../constants';
import tokenService from '../services/tokenKvikmyndirService';
import theaterService from '../services/theaterKvikmyndirService';
import movieService from '../services/movieKvikmyndirService';
import upcomingService from '../services/upcomingKvikmyndirService';

export const fetchTheaters = (token) => {
  return async dispatch => {
    try {
      const theaters = await theaterService(token);
      dispatch(getTheatersSuccess(theaters));
    } 
    catch (err) {
      console.log(err);
      // TODO: Should dispatch an error action
    }
  };
};

const getTheatersSuccess = theaters => {
  return {
    type: constants.FETCH_THEATERS,
    payload: theaters,
  };
};

export const fetchMovies = (token) => {
  return async dispatch => {
    try {
      const movies = await movieService(token);
      dispatch(getMoviesSuccess(movies));
    } 
    catch (err) {
      console.log(err);
      // TODO: Should dispatch an error action
    }
  };
};

const getMoviesSuccess = movies => {
  return {
    type: constants.FETCH_MOVIES,
    payload: movies,
  };
};

export const fetchToken = () => {
  return async dispatch => {
    try {
      const token = await tokenService();
      dispatch(getTokenSuccess(token));
    } 
    catch (err) {
      console.log(err);
      // TODO: Should dispatch an error action
    }
  };
};

const getTokenSuccess = token => {
  return {
    type: constants.FETCH_TOKEN,
    payload: token,
  };
};

export const fetchUpcoming = (token) => {
  return async dispatch => {
    try {
      const upcoming = await upcomingService(token);
      dispatch(getUpcomingSuccess(upcoming));
    } catch (err) {
      // TODO: Should dispatch an error action
    }
  };
};

const getUpcomingSuccess = upcoming => {
  return {
    type: constants.FETCH_UPCOMING,
    payload: upcoming,
  };
};
