import * as constants from '../constants';

export default function (state = null, action) {
  switch (action.type) {
    case constants.FETCH_MOVIES:
      return action.payload;
    default: return state;
  }
}
