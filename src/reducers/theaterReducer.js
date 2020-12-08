import * as constants from '../constants';
import fetchTheaterComp from '../components/FetchTheaters';

export default function (state = null, action) {
  switch (action.type) {
    case constants.FETCH_THEATERS:
      return fetchTheaterComp;
    default: return state;
  }
}
