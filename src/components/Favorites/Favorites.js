import React from 'react';
import { FavoriteCard } from '../FavoriteCard/FavoriteCard';
import './Favorites.css';

export const Favorites = ({ favorites }) => {
  const makeCards = () => {
    if (favorites.length) {
      return favorites.map(favorite => {
        return <FavoriteCard key={favorite.name} favorite={favorite} />;
      });
    } else {
      return (
        <p className='your-favs'>
          You don't have any favorites yet, click Explore to get started!
        </p>
      );
    }
  };
  return (
    <>
      <h2 className='your-favs'>Your Favorites</h2>
      <section className='favorites-container'>{makeCards()}</section>
    </>
  );
};
