import token from '../GetApiToken';

const fetchTheatersFromApiAsync = async () => {
  try {
    const token1 = await token;
    console.log('Fetching Theaters');
    const response = await fetch('https://api.kvikmyndir.is/theaters', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': token1,
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export default fetchTheatersFromApiAsync;
