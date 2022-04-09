import React from "react";

function PokemonCard(pokemon) {
  console.log("test");
  console.log(pokemon.props.hp);
  return (
    <div className="wrapper" style={{ backgroundColor: "lightgray" }}>
      <div className="wrapper">
        <div className="row">
          <div className="col">
            img sprite
            <img src={pokemon.props.sprite} alt="" className="d-block" />
          </div>
          <div className="col">
            <p>
              HP: {pokemon.props.hp}
              <br />
              Attack: {pokemon.props.attack} <br />
              Defense: {pokemon.props.defense} <br />
              Speed: {pokemon.props.speed} <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
