import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export const PokeDetails = ({ pokeInfo }) => {
  return (
    <div className='pokemon-details'>
      <div className='pokemon-details__item'>
        <div className='pokemon-details__views'>
          <img
            className='pokemon-details__img'
            src={pokeInfo.sprites.front_default}
            alt='pokemon default front view'
          />
          <img
            className='pokemon-details__img'
            src={pokeInfo.sprites.front_shiny}
            alt='pokemon shiny front view'
          />
          <img
            className='pokemon-details__img'
            src={pokeInfo.sprites.back_default}
            alt='pokemon default back view'
          />
          <img
            className='pokemon-details__img'
            src={pokeInfo.sprites.back_shiny}
            alt='pokemon shiny back view'
          />
        </div>

        <div className='pokemon-details__info'>
          <p className='pokemon-details__info-item'>Pokemon name: {pokeInfo.name}</p>
          <p className='pokemon-details__info-item'>Species name: {pokeInfo.species.name}</p>
          <p className='pokemon-details__info-item'>Base experience: {pokeInfo.base_experience}</p>
          <p className='pokemon-details__info-item'>Weight: {pokeInfo.weight}</p>
          <p className='pokemon-details__info-item'>Height: {pokeInfo.height}</p>
        </div>
      </div>
      <Link
        className='btn pokemon-details__link'
        to='/main'
      >
        Go Back
      </Link>
    </div>
  );
}
