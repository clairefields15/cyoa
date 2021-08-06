import React from 'react';
import PropTypes from 'prop-types';

export const QualityOfLife = ({ cityDetails }) => {
  return (
    <section>
      <h2>Quality Of Life</h2>
    </section>
  );
};

QualityOfLife.propTypes = {
  cityDetails: PropTypes.object.isRequired
};
