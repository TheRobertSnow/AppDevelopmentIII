import * as constants from '../constants';

export const fetchTheaters = () => ({
  type: constants.FETCH_THEATERS,
});

export const fetchMovies = () => ({
  type: constants.FETCH_MOVIES,
});

export const fetchToken = () => ({
  type: constants.FETCH_TOKEN,
});
