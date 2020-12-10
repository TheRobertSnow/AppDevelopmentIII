import * as constants from '../constants';

export const assignCurrentMovie = movie => {
  return {
    type: constants.CURRENT_MOVIE,
    payload: movie,
  };
};
