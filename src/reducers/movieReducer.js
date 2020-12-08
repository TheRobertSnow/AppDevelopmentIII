import * as constants from '../constants';
import fetchMovieComp from '../components/FetchMovies';

export default async function (state = null, action) {
  switch (action.type) {
    case constants.FETCH_MOVIES:
      return fetchMovieComp;
    default: return state;
  }
}