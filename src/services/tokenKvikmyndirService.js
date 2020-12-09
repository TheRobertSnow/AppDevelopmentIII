const ENDPOINT = 'https://api.kvikmyndir.is/authenticate';

const tokenService = async () => {
  const result = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'Limgur',
      password: 'Potato123',
    }),
  });
  const data = await result.json();
  return data.token;
};

export default tokenService;
