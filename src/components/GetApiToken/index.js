const getMoviesFromApiAsync = async () => {
  try {
    const response = await fetch('https://api.kvikmyndir.is/authenticate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'Limgur',
        password: 'Potato123'
      });
    });
    const json = await response.json();
    return json.movies;
  } catch (error) {
    console.error(error);
  }
};
