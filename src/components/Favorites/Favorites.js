import React from 'react';

export const Favorites = ({ favorites }) => {
  const makeCards = () => {
    if (favorites.length) {
      console.log(favorites);
      return <p>hi</p>;
    } else {
      return (
        <p>You don't have any favorites yet, click explore to get started!</p>
      );
    }
  };
  return (
    <>
      <h2>Your Favorites</h2>
      {makeCards()}
    </>
  );
};
