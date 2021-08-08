import React from 'react';
import { NavLink } from 'react-router-dom';
import './FavoriteCard.css';
import likeRed from '../../images/likeRed.png';

export const FavoriteCard = ({ favorite }) => {
  let { name, image } = favorite;

  return (
    <NavLink to={`/favorites/${name}`} className='link'>
      <div className='favorite-card'>
        <div className='img-container-fav'>
          <div className='city-name-fav'>
            <img src={likeRed} alt='filled heart' className='in-favs' />
            {name}
          </div>
          <img src={image} alt={`Beautiful ${name}`} className='city-img-fav' />
        </div>
      </div>
    </NavLink>
  );
};
