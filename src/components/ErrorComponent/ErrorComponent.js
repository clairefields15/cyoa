import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ErrorComponent.css';

export const ErrorComponent = ({ errorMessage }) => {
  return (
    <div className='error-page'>
      <h2 className='error-message'>{errorMessage}</h2>
      {errorMessage ===
        "Sorry, that page doesn't exist, would you like to go home?" && (
        <NavLink to='/' className='link'>
          <button className='error-home-btn'>Home</button>
        </NavLink>
      )}
    </div>
  );
};

ErrorComponent.propTypes = {
  errorMessage: PropTypes.string.isRequired
};
