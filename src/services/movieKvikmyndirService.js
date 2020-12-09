const ENDPOINT = 'https://api.kvikmyndir.is/movies';

const movieService = async (token) => {
  const result = await fetch(ENDPOINT, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
  });
  const data = await result.json();
  return data;
};

export default movieService;
