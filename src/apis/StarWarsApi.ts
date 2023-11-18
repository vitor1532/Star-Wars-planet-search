const BASE_URL = 'https://swapi.dev/api';

export const fetchPlanets = async () => {
  const response = await fetch(`${BASE_URL}/planets`);
  const data = await response.json();
  return data.results;
};
