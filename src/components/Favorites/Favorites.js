import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FavoriteCard } from '../FavoriteCard/FavoriteCard';
import './Favorites.css';

export const Favorites = ({ favorites, removeFromFavorites }) => {
  const makeCards = () => {
    return favorites.map(favorite => {
      return (
        <FavoriteCard
          key={favorite.name}
          favorite={favorite}
          removeFromFavorites={removeFromFavorites}
        />
      );
    });
  };

  return (
    <>
      <h2 className='your-favs'>Your Favorites</h2>
      {!favorites.length && (
        <p className='your-favs'>
          You don't have any favorites yet, click Explore to get started!
          <NavLink to='/' exact className='link'>
            <button className='nav-button blue' id='explore-btn'>
              <span class='fas fa-search'></span> Explore
            </button>
          </NavLink>
        </p>
      )}
      {!!favorites.length && (
        <section className='favorites-container'>{makeCards()}</section>
      )}
    </>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired,
  removeFromFavorites: PropTypes.func.isRequired
};
