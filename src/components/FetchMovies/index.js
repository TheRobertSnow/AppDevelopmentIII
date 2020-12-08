import token from '../GetApiToken';

const fetchMoviesFromApiAsync = async () => {
  try {
    console.log('Fetching Movies');
    const response = await fetch('https://api.kvikmyndir.is/movies', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
    });
    const json = await response.json();
    return json.movies;
  } catch (error) {
    console.error(error);
  }
};

export default fetchMoviesFromApiAsync;
