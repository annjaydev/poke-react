import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { PokeCard } from './components/pokeCard/PokeCard';
import { PokeDetails } from './components/pokeDetails/PokeDetails';
import axios from 'axios';

export const App = () => {

  const [pokemons, setPokemons] = useState([]);
  const [randomPokemon, setRandomPokemon] = useState(null);
  const [chosenPokemon, setChosenPokemon] = useState(null);

  const history = useHistory();
  const pokeNumber = 898;
  const pokeNumberShow = 6;

  const generatePokemonsId = (num) => {
    const pokemonsId = [];
    for (let i = 1; i <= num; i++) {
      pokemonsId.push(Math.floor(Math.random() * pokeNumber) + 1);
    }

    return pokemonsId;
  }

  const generateFighter = () => {
    const [id] = generatePokemonsId(1);

    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => setRandomPokemon(res.data));
  }

  const showPokeDetails = (pokeInfo) => {
    setChosenPokemon(pokeInfo);
    history.push(`/details/${pokeInfo.id}`);
  }

  useEffect(() => {
    const ids = generatePokemonsId(pokeNumberShow);
    setPokemons([]);

    ids.forEach(id => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setPokemons(pokemons => [...pokemons, res.data]));
    });
    console.log(pokemons);
  }, []);

  return (
    <div className='app-container'>
      <h1 className='title'>Choose your fighter</h1>
      <div className='app__pokemons'>

        <Switch>
          <Route path='/main' >
            {
              pokemons.map(pokemon => (
                <PokeCard
                  key={pokemon.id}
                  pokeInfo={pokemon}
                  showDetails={showPokeDetails}
                />
              ))
            }

            <div className='app__random-pokemon'>
              <button
                className='btn'
                onClick={() => generateFighter()}
              >
                Show random fighter
              </button>
              {
                randomPokemon && (
                  <PokeCard
                    key={randomPokemon.id}
                    pokeInfo={randomPokemon}
                  />
                )
              }
            </div>
          </Route>
          <Route path='/details/:id' >
            <PokeDetails pokeInfo={chosenPokemon} />
          </Route>
          <Redirect to='/main' />
        </Switch>

      </div>
    </div>
  );
}
