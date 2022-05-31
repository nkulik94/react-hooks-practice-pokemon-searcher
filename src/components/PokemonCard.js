import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( { pokemon } ) {
  const [front, switchSides] = useState(true)
  const currentSprite = front ? pokemon.sprites.front : pokemon.sprites.back

  return (
    <Card>
      <div onClick={() => switchSides(!front)}>
        <div className="image">
          <img alt="oh no!" src={currentSprite} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
