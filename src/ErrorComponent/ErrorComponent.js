import React from 'react';
import { NavLink } from 'react-router-dom';

export const ErrorComponent = ({ errorMessage }) => {
  return (
    <>
      <h2>{errorMessage}</h2>
      <NavLink to='/'>Home</NavLink>
    </>
  );
};
