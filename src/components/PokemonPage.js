import React, { useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeList, updateList] = useState([])
  const [searchValue, search] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(r => r.json())
      .then(data => updateList(data))
  }, [])

  const renderedList = pokeList.filter(pokemon => pokemon.name.toUpperCase().match(searchValue.toUpperCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search searchValue={searchValue} update={search} />
      <br />
      <PokemonCollection pokeList={renderedList}/>
    </Container>
  );
}

export default PokemonPage;
