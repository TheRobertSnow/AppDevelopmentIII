import token from '../GetApiToken';

const fetchTheatersFromApiAsync = async () => {
  const response = await fetch('https://api.kvikmyndir.is/theaters', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
  });
  console.log(response);
  return response;
  // const data = await fetch('https://api.kvikmyndir.is/theaters', {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //     'x-access-token': token.token,
  //   },
  // }).then((response) => response.json());
  // return data;
  // try {
  //   const token1 = await token;
  //   console.log('Fetching Theaters');
  //   const response = await fetch('https://api.kvikmyndir.is/theaters', {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       'x-access-token': token1.token,
  //     },
  //   }).then((response) => response.json());
  //   const json = await response.json();
  //   return json;
  // } catch (error) {
  //   console.error(error);
  //   return null;
  // }
};

export default fetchTheatersFromApiAsync;
