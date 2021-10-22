import React from 'react';
import './index.scss';

export const PokeInfo = ({ pokeInfo }) => {
  return (
    <div className='pokemon__info'>
      <p className='pokemon__stat'>
        <span className='pokemon__stat--bold'>Species name: </span>
        {pokeInfo.species.name}
      </p>
      <p className='pokemon__stat'>
        <span className='pokemon__stat--bold'>Base experience: </span>
        {pokeInfo.base_experience}
      </p>
      <p className='pokemon__stat'>
        <span className='pokemon__stat--bold'>Weight: </span>
        {pokeInfo.weight}
      </p>
      <p className='pokemon__stat'>
        <span className='pokemon__stat--bold'>Height: </span>
        {pokeInfo.height}
      </p>
    </div>
  );
}
