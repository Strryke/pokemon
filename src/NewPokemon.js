import React, { useState, useEffect } from "react";
import { getPokemon } from "./pokemon";
import PokemonCard from "./PokemonCard";
import { sendPokemon } from "./firebase";
import "./styles.css";

function NewPokemon() {
  const [pokemon, setPokemon] = useState({});
  const [number, setNumber] = useState(0);
  const [guess, setGuess] = useState("");
  const [output, setOutput] = useState("Guess a number from 1-10");
  const [numberGuess, setnumberGuess] = useState(1);

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
    setnumberGuess(numberGuess + 1);
    if (guess == number) {
      setOutput(`You are correct! ${pokemon.name} has been captured!`);
      sendPokemon(pokemon);
      setTimeout(() => window.location.reload(), 2000);
    } else if (guess > number) {
      setOutput("Your guess is too high!");
      if (numberGuess >= 3) {
        setOutput(`Oh no! ${pokemon.name} has escaped!`);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } else if (guess < number) {
      setOutput("Your guess is too low!");
      if (numberGuess >= 3) {
        setOutput(`Oh no! ${pokemon.name} has escaped!`);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
    setGuess("");
  };

  return (
    <div className="container-sm justify-content-center">
      <div className="col-lg-4 mx-auto">
        {pokemon && <PokemonCard props={pokemon} />}
      </div>
      <div className="col-lg-3 mx-auto ">
        {output}
        <p>You have {`${4 - numberGuess} guesses remaining!`}</p>
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
