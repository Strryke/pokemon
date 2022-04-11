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
          className="wrapper row justify-content-start"
          style={{ backgroundColor: "lightgray" }}
        >
          {pokemons &&
            pokemons.map((pokemon) => (
              <div className="col-lg-3 col-md-4 p-0">
                <PokemonCard key={pokemon.name} props={pokemon} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
