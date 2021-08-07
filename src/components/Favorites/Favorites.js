import React from 'react';

export const Favorites = ({ favorites }) => {
  const makeCards = () => {
    if (favorites.length) {
      return favorites.map(favorite => {
        console.log(favorite);
        return <li>{favorite.name}</li>;
      });
    } else {
      return (
        <p>You don't have any favorites yet, click "Explore" to get started!</p>
      );
    }
  };
  return (
    <>
      <h2>Your Favorites</h2>
      <ul>{makeCards()}</ul>
    </>
  );
};
