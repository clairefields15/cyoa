import React from 'react';
import { NavLink } from 'react-router-dom';
import './FavoriteCard.css';

export const FavoriteCard = ({ favorite }) => {
  let { name, details, image } = favorite;

  return (
    <NavLink to={`/city/${name}`} className='link'>
      <div className='favorite-card'>
        <div className='img-container-fav'>
          <div className='city-name-fav'>City: {name}</div>
          <img src={image} alt={`Beautiful ${name}`} className='city-img-fav' />
        </div>
      </div>
    </NavLink>
  );
};
