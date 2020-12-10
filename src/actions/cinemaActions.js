import * as constants from '../constants';

export const assignCurrentCinema = cinema => {
  return {
    type: constants.CURRENT_CINEMA,
    payload: cinema,
  };
};
