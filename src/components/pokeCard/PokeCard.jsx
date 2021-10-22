import React from 'react';
import { Tooltip } from '@material-ui/core';
import { PokeInfo } from '../pokeInfo/PokeInfo';
import './index.scss';

export const PokeCard = ({ pokeInfo }) => {
  return (
    <Tooltip
      className='pokemon__info'
      title={<PokeInfo pokeInfo={pokeInfo} />}
      placement='right'
      arrow
    >
      <div className='pokemon-card'>
        <div className='pokemon-card__view'>
          <img
            className='pokemon__img'
            src={pokeInfo.sprites.front_default}
            alt='pokemon front view'
          />
          <img
            className='pokemon__img'
            src={pokeInfo.sprites.back_default}
            alt='pokemon back view'
          />
        </div>
        <p className='pokemon-card__name'>
          {pokeInfo.name.toUpperCase()}
        </p>
      </div>
    </Tooltip>
  );
}
