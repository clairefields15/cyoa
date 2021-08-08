import React from 'react';
import './FavoriteCard.css';

export const FavoriteCard = ({ favorite }) => {
  let { name, details, image } = favorite;

  return (
    <section className='favorite-card'>
      <div className='img-container'>
        <div className='city-name'>City: {name}</div>
        <img src={image} alt={`Beautiful ${name}`} />
      </div>
    </section>
  );
};
