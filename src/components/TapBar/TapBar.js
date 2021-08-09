import React, { useState } from 'react';
import './TapBar.css';

export const TapBar = ({ addToFavorites, removeFromCities }) => {
  const [disableButton, setDisableButton] = useState(false);

  const handleLike = async e => {
    e.preventDefault();
    setDisableButton(true);
    await addToFavorites();
    setDisableButton(false);
  };

  const handleDislike = async e => {
    e.preventDefault();
    setDisableButton(true);
    await removeFromCities();
    setDisableButton(false);
  };
  return (
    <div className='tap-bar'>
      <div className='dislike-bg'>
        <button
          className='nav-button'
          id='nope-btn'
          disabled={disableButton}
          onClick={handleDislike}
        >
          <span className='fas fa-times-circle'></span>
          Nope
        </button>
      </div>
      <div className='like-bg'>
        <button
          className='nav-button'
          onClick={e => handleLike(e)}
          disabled={disableButton}
          id='like-btn'
        >
          <span className='fas fa-heart'></span>
          Like
        </button>
      </div>
    </div>
  );
};
