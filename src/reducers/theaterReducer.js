import * as constants from '../constants';
import fetchTheatersFromApiAsync from '../components/FetchTheaters';

export default async function (state = null, action) {
  switch (action.type) {
    case constants.FETCH_THEATERS:
      return fetchTheatersFromApiAsync;
    default: return state;
  }
}
