import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ErrorComponent = ({ errorMessage }) => {
  return (
    <>
      <h2>{errorMessage}</h2>
      {errorMessage ===
        "Sorry that page doesn't exist, would you like to go home?" && (
        <NavLink to='/'>Home</NavLink>
      )}
    </>
  );
};

ErrorComponent.propTypes = {
  errorMessage: PropTypes.string.isRequired
};
