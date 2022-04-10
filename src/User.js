import React, { useState, useEffect } from "react";
import "./styles.css";
import TrainerCard from "./TrainerCard";
import PokemonCard from "./PokemonCard";
import { getPokemon } from "./firebase";

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
      <div className="mt-5 pt-5">
        <TrainerCard />
        <div
          className="wrapper row justify-content-center"
          style={{ backgroundColor: "lightgray" }}
        >
          {pokemons &&
            pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.name} props={pokemon} />
            ))}
        </div>
      </div>
    </>
  );
}
