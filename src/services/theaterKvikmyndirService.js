const ENDPOINT = 'https://api.kvikmyndir.is/theaters';

const theaterService = async (token) => {
  const result = await fetch(ENDPOINT, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
  });
  const data = await result.json();
  return data.sort((a, b) => a.name.localeCompare(b.name));
};

export default theaterService;
