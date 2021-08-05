import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../Logo/Logo';
import { CityImage } from '../CityImage/CityImage';
import './Main.css';

export const Main = ({ cityName, cityDetails, cityImage }) => {
  return (
    <main>
      <Logo />
      <CityImage cityImage={cityImage} cityName={cityName} />
    </main>
  );
};

Main.propTypes = {
  cityName: PropTypes.string.isRequired,
  cityDetails: PropTypes.object.isRequired,
  cityImage: PropTypes.object.isRequired
};
