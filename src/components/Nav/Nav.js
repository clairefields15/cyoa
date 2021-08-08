import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import './Nav.css';

export const Nav = ({
  addToFavorites,
  removeFromCities,
  favorites,
  cityName
}) => {
  const { pathname } = useLocation();
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
    <>
      {pathname === '/' && (
        <nav>
          <button
            className='nav-button'
            id='nope-btn'
            disabled={disableButton}
            onClick={handleDislike}
          >
            <span className='fas fa-times-circle'></span>
            Nope
          </button>

          <NavLink
            to='/favorites'
            exact
            className='nav-button'
            activeClassName='hidden-link'
          >
            <button
              className='nav-button'
              id='favorites-btn'
              disabled={disableButton}
            >
              <span className='fas fa-user'></span>
              Favorites
            </button>
          </NavLink>

          <button
            className='nav-button'
            onClick={e => handleLike(e)}
            disabled={disableButton}
            id='like-btn'
          >
            <span className='fas fa-heart'></span>
            Like
          </button>
        </nav>
      )}

      {pathname !== '/' && (
        <nav>
          <NavLink
            to='/'
            exact
            activeClassName='hidden-link'
            className='nav-button'
            id='explore-btn'
          >
            <span className='fas fa-home'></span> Explore
          </NavLink>
        </nav>
      )}
    </>
  );
};
