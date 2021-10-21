import React, { useState, useEffect } from 'react';
import { PokeCard } from './components/pokeCard/PokeCard';
import axios from 'axios';

export const App = () => {

  const pokeNumber = 898;
  const pokeNumberShow = 12;

  const generatePokemonsId = () => {
    const pokemonsId = [];
    for (let i = 1; i <= pokeNumberShow; i++) {
      pokemonsId.push(Math.floor(Math.random() * pokeNumber) + 1);
    }

    return pokemonsId;
  }

  const [pokemons, setPokemons] = useState([
    // { id: 1, srcFront: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', srcBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', name: 'Pluto' },
    // { id: 2, srcFront: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', srcBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', name: 'Pluto' },
    // { id: 3, srcFront: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', srcBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', name: 'Pluto' },
    // { id: 4, srcFront: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', srcBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', name: 'Pluto' },
    // { id: 5, srcFront: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', srcBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', name: 'Pluto' },
    // { id: 6, srcFront: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', srcBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', name: 'Pluto' },
    // { id: 7, srcFront: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', srcBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', name: 'Pluto' },
    // { id: 8, srcFront: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', srcBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', name: 'Pluto' },
    // { id: 9, srcFront: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', srcBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', name: 'Pluto' },
    // { id: 10, srcFront: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', srcBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', name: 'Pluto' },
  ]);

  useEffect(() => {
    const ids = generatePokemonsId();
    
    ids.forEach(id => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setPokemons(pokemons => [...pokemons, res.data]));
    });
  }, []);

  return (
    <div className='app-container'>
      <div className='app__pokemons'>
        {
          pokemons.map(pokemon => (
            <PokeCard
              key={pokemon.id}
              srcFront={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              srcBack={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`}
              name={pokemon.name}
            />
          ))
        }
      </div>
    </div>
  );
}
