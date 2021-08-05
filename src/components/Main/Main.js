import React from 'react';
import PropTypes from 'prop-types';
import { CityImage } from '../CityImage/CityImage';
import './Main.css';

export const Main = ({ cityName, cityDetails, cityImage, isLoading }) => {
  return (
    <main>
      {isLoading && <h2 className='loading-msg'>Loading...</h2>}
      {!isLoading && <CityImage cityImage={cityImage} cityName={cityName} />}
    </main>
  );
};

Main.propTypes = {
  cityName: PropTypes.string.isRequired,
  cityDetails: PropTypes.object.isRequired,
  cityImage: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};
