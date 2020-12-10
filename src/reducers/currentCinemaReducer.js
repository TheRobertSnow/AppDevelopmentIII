import * as constants from '../constants';

export default function (state = null, action) {
  switch (action.type) {
    case constants.CURRENT_CINEMA:
      return action.payload;
    default: return state;
  }
}
