import * as constants from '../constants';

export const fetchTheaters = BabaBooey => ({
  type: constants.FETCH_THEATERS,
  payload: BabaBooey,
});

export const fetchMovies = () => ({
  type: constants.FETCH_MOVIES,
});
