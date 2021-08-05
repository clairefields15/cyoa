import React from 'react';
import PropTypes from 'prop-types';
import './CityImage.css';

export const CityImage = ({ cityName, cityImage }) => {
  return (
    <div className='img-container'>
      <img src={cityImage.mobile} alt={`Beautiful ${cityName}!`} />
      <h2 className='city-name'>{cityName}</h2>
    </div>
  );
};

CityImage.propTypes = {
  cityName: PropTypes.string.isRequired,
  cityImage: PropTypes.object.isRequired
};
