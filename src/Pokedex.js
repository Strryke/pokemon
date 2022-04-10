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
  console.log("pls work");

  return (
    <div
      className="wrapper hi row justify-content-center"
      style={{ backgroundColor: "lightgray" }}
    >
      {pokemons &&
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} props={pokemon} />
        ))}
    </div>
  );
}

export default Pokedex;
