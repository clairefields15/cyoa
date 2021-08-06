import React from 'react';
import PropTypes from 'prop-types';
import './Summary.css';

export const Summary = ({ cityDetails }) => {
  return (
    <section className='summary-container'>
      <h2>Summary</h2>
      {cityDetails.summary}
    </section>
  );
};

Summary.propTypes = {
  cityDetails: PropTypes.object.isRequired
};
