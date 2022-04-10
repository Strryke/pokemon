import React from "react";

function PokemonCard(pokemon) {
  //   console.log("a");
  //   console.log(pokemon.props.name);
  return (
    <div className="col-lg-3 col-md-4 p-0 mx-auto">
      <div className="wrapper">
        <div className="row">
          <div className="col">
            <div className="text-center h-3 text-capitalize">
              {pokemon.props.name}
            </div>
            <img
              src={pokemon.props.sprite}
              alt=""
              className="d-block mx-auto"
            />
          </div>
          <div className="col align-items-center mt-2">
            <div>
              HP: {pokemon.props.hp}
              <br />
              Attack: {pokemon.props.attack} <br />
              Defense: {pokemon.props.defense} <br />
              Speed: {pokemon.props.speed} <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
