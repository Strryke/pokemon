import React, { useState, useEffect } from "react";
import "./styles.css";
import TrainerCard from "./TrainerCard";
import PokemonCard from "./PokemonCard";
import { getPokemon } from "./pokemon";

export default function User() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setPokemons(await getPokemon());
    }
    fetchData();
  }, []);

  return (
    <>
      <TrainerCard />
      {pokemons &&
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} props={pokemon} />
        ))}
    </>
  );
}
