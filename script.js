// DOM
const capturarContainer = document.querySelector('.js-container');
const opcoes = document.querySelector('.opcoes');
const pokeImg = document.createElement('img');


// gera valores aleatorios entre 1 e 150
const randomico = (max, min) => Math.floor(Math.random() * (max - min) + min);

// gera um pokemon aleatorio
const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${randomico(0, 152)}/`

// api que retorna todos
const api_url = `https://pokeapi.co/api/v2/pokemon?limit=151`

// captura a API com todos os pokemons
const capturarPokemons = () => {
  return fetch(api_url)
  .then(response => response.json())
  .then((data => data));
};

// captura o pokemon especfico gerando pelo randomico
const capturarUmPokemon = () => {
  return fetch(pokemonURL)
  .then(response => response.json())
  .then((data => data));
};

// monstra dinamicamente na pagina o pokemon
const monstrarPokemons = async () => {
  const pokemon = await capturarUmPokemon();
  const textoTitulo = document.createElement('h1');

  const pokemonDivi =  document.querySelector('.display-pokemon');
  
  const pokeDiv = document.createElement('div');

  textoTitulo.classList.add('pokemon-titulo');
  pokeDiv.classList.add('pokemon');
  pokeImg.classList.add('pokemon-img');

  pokeImg.src = pokemon.sprites.back_shiny
  textoTitulo.innerText ='Quem é esse pokemon???'

  capturarContainer.appendChild(textoTitulo);
  pokeDiv.appendChild(pokeImg);
  capturarContainer.appendChild(pokeDiv);
  pokemonDivi.appendChild(textoTitulo);
  
  pokemonDivi.appendChild(pokeImg);
  return pokemon;
};

const adicionarOpcoes = async () => {
  const pokemons = await capturarPokemons();
  const botao = document.createElement('button')
  botao.innerText = pokemons.results[randomico(0, 151)].name;
  botao.addEventListener('click', () =>{
    botao.classList.add('botao-errado')
  })
  return botao;
};

const aplicarBotoes = async () => {
  const opcao = await adicionarOpcoes();
  opcoes.appendChild(opcao);
}

const botaoCorreto = async () => {
  const resultado = await monstrarPokemons();
  const botao = document.createElement('button');
  botao.innerText = resultado.name;
  opcoes.appendChild(botao);
  botao.addEventListener('click', () =>{
    botao.classList.add('botao-correto');
    pokeImg.src = resultado.sprites.front_default;
    setTimeout(() => alert('PARABÉgitNS!!!!!!!!!!'),1000)
    setTimeout(() => location.reload(),4000)
  })
}

const randomBotao = (min, max) => {
  max *= 1000;
  min *= 1000;
  Math.floor(Math.random() * (max - min) + min);
}

const adicionarBotoes =  () => {
  setTimeout(() => {
    botaoCorreto();
  }, randomBotao(0.5,2))
 
  setTimeout(() => {
    aplicarBotoes();
  }, randomBotao(0.5,2));
  
  setTimeout(() => {
    aplicarBotoes();
  }, randomBotao(0.5,2))
 
  setTimeout(() => {
    aplicarBotoes();
  }, randomBotao(0.5,2))

}

window.onload = () => {
  adicionarBotoes();
}
