const axios = require("axios");

const getPokemon = async () => {
  const pokedex = [];
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0"
  );
  response.data.results.forEach((pokemon) => {
    pokedex.push({
      name: pokemon.name,
      url: pokemon.url,
    });
  });

  for (const pokemon of pokedex) {
    const response = await axios.get(pokemon.url);
    pokemon["hp"] = response.data.stats[0].base_stat;
    pokemon["attack"] = response.data.stats[1].base_stat;
    pokemon["defense"] = response.data.stats[2].base_stat;
    pokemon["speed"] = response.data.stats[5].base_stat;
    pokemon["sprite"] = response.data.sprites.front_default;
  }

  // pokedex.forEach(async (pokemon) => {
  //   const response = await axios.get(pokemon.url);
  //   pokemon["hp"] = response.data.stats[0].base_stat;
  //   pokemon["attack"] = response.data.stats[1].base_stat;
  //   pokemon["defense"] = response.data.stats[2].base_stat;
  //   pokemon["speed"] = response.data.stats[5].base_stat;
  //   pokemon["sprite"] = response.data.sprites.front_default;
  // });

  return pokedex;
};

export { getPokemon };
