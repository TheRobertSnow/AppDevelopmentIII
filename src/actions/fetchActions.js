import * as constants from '../constants';
import tokenService from '../services/tokenKvikmyndirService';
import theaterService from '../services/theaterKvikmyndirService';
import movieService from '../services/movieKvikmyndirService';

export const fetchTheaters = (token) => {
  return async dispatch => {
    try {
      const theaters = await theaterService(token);
      dispatch(getTheatersSuccess(theaters));
    } catch (err) {
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
    } catch (err) {
      // TODO: Should dispatch an error action
    }
  };
};

const getMoviesSuccess = token => {
  return {
    type: constants.FETCH_MOVIES,
    payload: token,
  };
};

export const fetchToken = () => {
  return async dispatch => {
    try {
      const token = await tokenService();
      dispatch(getTokenSuccess(token));
    } catch (err) {
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
