import React from 'react';
import { NavLink } from 'react-router-dom';
import './FavoriteCard.css';

export const FavoriteCard = ({ favorite }) => {
  let { name, image } = favorite;

  return (
    <NavLink to={`/favorites/${name}`} className='link'>
      <div className='favorite-card'>
        <div className='img-container-fav'>
          <div className='city-name-fav'>
            {' '}
            <i className='fas fa-heart fav-heart'></i>
            {name}
          </div>

          <img src={image} alt={`Beautiful ${name}`} className='city-img-fav' />
        </div>
      </div>
    </NavLink>
  );
};
