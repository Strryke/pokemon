import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { getPokemon } from "./pokemon";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemon().then((data) => {
      setPokemons(data);
    });
  }, []);

  return (
    <div
      className="wrapper row justify-content-center"
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
