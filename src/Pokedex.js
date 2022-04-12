import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { getPokemon } from "./pokemon";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setPokemons(await getPokemon());
    }
    fetchData();
  }, []);

  return (
    <div
      className="wrapper row justify-content-start"
      style={{ backgroundColor: "lightgray" }}
    >
      {pokemons &&
        pokemons.map((pokemon) => (
          <div className="col-lg-3 col-md-4 p-0" key={pokemon.id}>
            <PokemonCard props={pokemon} />
          </div>
        ))}
    </div>
  );
}

export default Pokedex;
