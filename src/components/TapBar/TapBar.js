import React from 'react';
import PropTypes from 'prop-types';
import './TapBar.css';

export const TapBar = ({ addToFavorites, removeFromCities }) => {
  const handleLike = async e => {
    e.preventDefault();
    addToFavorites();
  };

  const handleDislike = async e => {
    e.preventDefault();
    removeFromCities();
  };

  return (
    <section className='tap-bar'>
      <button
        className='nav-button dislike-bg'
        id='nope-btn'
        onClick={e => handleDislike(e)}
      >
        <span className='fas fa-times-circle'></span>
        Nope
      </button>
      <button
        className='nav-button like-bg'
        onClick={e => handleLike(e)}
        id='like-btn'
      >
        <span className='fas fa-heart'></span>
        Like
      </button>
    </section>
  );
};

TapBar.propTypes = {
  addToFavorites: PropTypes.func.isRequired,
  removeFromCities: PropTypes.func.isRequired
};
