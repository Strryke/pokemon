import React, { useState, useEffect } from "react";
import { getPokemon } from "./pokemon";
import PokemonCard from "./PokemonCard";
import { sendPokemon } from "./firebase";

function NewPokemon() {
  const [pokemon, setPokemon] = useState({});
  const [number, setNumber] = useState(0);
  const [guess, setGuess] = useState();
  const [output, setOutput] = useState("Guess a number from 1-10");

  useEffect(() => {
    setNumber(Math.floor(Math.random() * 10) + 1);
    getPokemon().then((data) => {
      const pokemonList = data;
      const random = Math.floor(Math.random() * pokemonList.length);
      setPokemon(pokemonList[random]);
    });
  }, []);

  const handleGuess = (e) => {
    e.preventDefault();
    console.log(guess);
    if (guess == number) {
      setOutput("You are correct!");
      sendPokemon(pokemon);
      setGuess("");
    } else if (guess > number) {
      setOutput("Your guess is too high!");
    } else if (guess < number) {
      setOutput("Your guess is too low!");
    }
  };

  return (
    <div className="container-sm justify-content-center">
      {pokemon && <PokemonCard props={pokemon} />}
      <div className="col-lg-3 mx-auto">
        {output}
        <div>
          <form action="" onSubmit={handleGuess}>
            <input
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              type="number"
              className="form-control"
            />
            <button action="submit" className="btn-round btn my-2 btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPokemon;
