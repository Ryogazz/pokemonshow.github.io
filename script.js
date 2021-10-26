const api_url = `https://pokeapi.co/api/v2/pokemon?limit=151`

const caputurarPokemons = () => {
  return fetch(api_url)
  .then(response => response.json())
  .then((data));
  
};