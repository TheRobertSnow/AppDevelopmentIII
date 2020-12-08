const getAuthFromApiAsync = async () => {
  const response = await fetch('https://api.kvikmyndir.is/authenticate', {
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
  console.log(response);
  return response.token;
  // try {
  //   const response = await fetch('https://api.kvikmyndir.is/authenticate', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       username: 'Limgur',
  //       password: 'Potato123',
  //     }),
  //   });
  //   const json = await response.json();
  //   return json;
  // } catch (error) {
  //   console.error(error);
  //   return null;
  // }
};

export default getAuthFromApiAsync;
