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
    console.log('hi');
    e.preventDefault();
    setDisableButton(true);
    await addToFavorites();
    setDisableButton(false);
  };

  // when the user clicks NOPE
  // the button should be disabled
  // call a fn in App
  // should see some text, saying you won't see this city again
  // the city should be removed from the array of cities in state

  const handleDislike = async e => {
    console.log('hi');

    e.preventDefault();
    setDisableButton(true);
    await removeFromCities();
    setDisableButton(false);
  };
  return (
    <>
      {pathname === '/' && (
        <nav>
          <button className='nav-button' id='nope-btn' disabled={disableButton}>
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
