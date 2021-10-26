// DOM
const capturarContainer = document.querySelector('.js-container');

// gera um pokemon aleatorio
const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${randomico(0, 152)}/`

// api que retorna todos
const api_url = `https://pokeapi.co/api/v2/pokemon?limit=151`

// gera valores aleatorios entre 1 e 150
const randomico = (max, min) => Math.floor(Math.random() * (max - min) + min);

// captura a API com todos os pokemons
const caputurarPokemons = () => {
  return fetch(api_url)
  .then(response => response.json())
  .then((data));
};

// captura o pokemon especfico gerando pelo randomico
const caputurarUmPokemon = () => {
  return fetch(pokemonURL)
  .then(response => response.json())
  .then((data));
};

const monstrarPokemons = () => {
  const pokeDiv = createElement('div')
  pokeDiv.classlist.add('pokemon')
}
