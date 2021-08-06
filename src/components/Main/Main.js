import React from 'react';
import PropTypes from 'prop-types';
import { CityImage } from '../CityImage/CityImage';
import { Summary } from '../Summary/Summary';
import { QualityOfLife } from '../QualityOfLife/QualityOfLife';
import { EightBall } from '../8Ball/8Ball';
import './Main.css';

export const Main = ({ cityName, cityDetails, cityImage }) => {
  return (
    <main>
      <CityImage cityImage={cityImage} cityName={cityName} />
      <Summary cityDetails={cityDetails} />
      <QualityOfLife cityDetails={cityDetails} />
      <EightBall cityName={cityName} />
    </main>
  );
};

Main.propTypes = {
  cityName: PropTypes.string.isRequired,
  cityDetails: PropTypes.object.isRequired,
  cityImage: PropTypes.string.isRequired
};
