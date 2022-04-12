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
      <div>
        <TrainerCard />
        <div
          className="wrapper row justify-content-start "
          style={{ backgroundColor: "lightgray" }}
        >
          {pokemons ? (
            pokemons.map((pokemon) => (
              <div className="col-lg-3 col-md-4 p-0" key={pokemon.name}>
                <PokemonCard props={pokemon} />
              </div>
            ))
          ) : (
            <div>You have no Pokemon yet! :(</div>
          )}
        </div>
      </div>
    </>
  );
}
