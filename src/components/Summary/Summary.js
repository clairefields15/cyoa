import React from 'react';
import PropTypes from 'prop-types';
import './Summary.css';

export const Summary = ({ cityDetails }) => {
  return (
    <section className='summary-container'>
      <h2>Summary</h2>
      <p>{cityDetails.summary}</p>
    </section>
  );
};

Summary.propTypes = {
  cityDetails: PropTypes.object.isRequired
};
