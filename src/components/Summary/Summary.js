import React from 'react';
import PropTypes from 'prop-types';

export const Summary = ({ cityDetails }) => {
  return (
    <section>
      <h2>Summary</h2>
      {cityDetails.summary}
    </section>
  );
};

Summary.propTypes = {
  cityDetails: PropTypes.object.isRequired
};
