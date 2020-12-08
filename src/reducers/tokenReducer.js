import * as constants from '../constants';

export default async function (state = null, action) {
  switch (action.type) {
    case constants.FETCH_TOKEN:
      return fetch('https://api.kvikmyndir.is/authenticate', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'Limgur',
          password: 'Potato123',
        }),
      }).then((response) => response.json());
    default: return state;
  }
}
