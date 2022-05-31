import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm( { onSubmitForm } ) {
  const [formData, updateForm] = useState({
    name: '',
    hp: '',
    sprites: {
      front: '',
      back: ''
    },
    dexNo: ''
  })

  function handleChange(e) {
    let formUpdate
    if (e.target.name === 'dexNo') {
      formUpdate = {
        sprites: {
          front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.target.value}.png`,
          back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${e.target.value}.png`
        },
        dexNo: e.target.value
      }
    } else {
      formUpdate = {[e.target.name]: e.target.value}
    }
    updateForm({...formData, ...formUpdate})
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          const config = {
            method: 'POST',
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
          }
          fetch('http://localhost:3001/pokemon', config)
            .then(r => r.json())
            .then(pokemon => onSubmitForm(pokemon))
          updateForm({
            name: '',
            hp: '',
            sprites: {
              front: '',
              back: ''
            },
            dexNo: ''
          })
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
          <Form.Input fluid label="Dex Number" placeholder="Dex Number" name="dexNo" value={formData.dexNo} onChange={handleChange} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} onChange={handleChange} />
          {/* <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          /> */}
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
