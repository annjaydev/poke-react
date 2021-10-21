import React from 'react';
import { Tooltip } from '@material-ui/core';
import { PokeInfo } from '../pokeInfo/PokeInfo';
import './index.scss';

export const PokeCard = ({ srcFront, srcBack, name }) => {
  return (
    <Tooltip
      className='pokemon__info'
      title={<PokeInfo text='Скоро здесь будет больше информации' />}
      placement='right'
      arrow
    >
      <div className='pokemon-card'>
        <div className='pokemon-card__view'>
          <img
            className='pokemon__img'
            src={srcFront}
            alt='pokemon front view'
          />
          <img
            className='pokemon__img'
            src={srcBack}
            alt='pokemon back view'
          />
        </div>
        <p className='pokemon-card__name'>
          {name}
        </p>
      </div>
    </Tooltip>
  );
}
