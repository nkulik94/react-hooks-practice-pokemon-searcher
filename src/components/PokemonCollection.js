import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection( { pokeList } ) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokeList.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} />)}
    </Card.Group>
  );
}

export default PokemonCollection;
