const poke_container = document.querySelector("#poke_container");
const pokemons_number = 150;

fetchPokemons();

const fetchPokemons = async () => {
  for (let i = 0; i <= pokemons_number; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`,
    res = await fetch(url),
    pokemon = await res.json();
};
