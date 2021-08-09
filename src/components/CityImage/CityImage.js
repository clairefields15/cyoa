import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CityImage.css';

export const CityImage = ({ cityName, cityImage }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div className='img-container'>
      <img
        src={cityImage.mobile}
        alt={`Beautiful ${cityName}!`}
        onLoad={handleLoaded}
        className='mobile-img'
      />
      <img
        src={cityImage.web}
        alt={`Beautiful ${cityName}!`}
        onLoad={handleLoaded}
        className='web-img'
      />
      {isLoaded && <h2 className='city-name'>{cityName}</h2>}
    </div>
  );
};

CityImage.propTypes = {
  cityName: PropTypes.string.isRequired,
  cityImage: PropTypes.object.isRequired
};
