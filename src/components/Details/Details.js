import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CityImage } from '../CityImage/CityImage';
import { Summary } from '../Summary/Summary';
import { QualityOfLife } from '../QualityOfLife/QualityOfLife';
import { fetchCity } from '../../helper-fns/apiCalls';
import { ErrorComponent } from '../ErrorComponent/ErrorComponent';

export const Details = ({ name }) => {
  const [cityDetails, setCityDetails] = useState({});
  const [cityImage, setCityImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      setErrorMessage('');
      let formattedName = name.replace(/\s+/g, '-').toLowerCase();
      let url = `https://api.teleport.org/api/urban_areas/slug:${formattedName}/`;
      try {
        let details = await fetchCity(url);
        setCityDetails(details[0]);
        setCityImage(details[1]);
      } catch (error) {
        setErrorMessage(error.message);
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, [name]);

  useEffect(() => {
    if (cityImage) {
      window.scrollTo(0, 0);
      setIsLoading(false);
    }
  }, [cityImage]);

  return (
    <>
      {!errorMessage && isLoading && <h2>Loading...</h2>}

      {!!errorMessage && !isLoading && (
        <ErrorComponent errorMessage={errorMessage} />
      )}

      {!isLoading && !errorMessage && (
        <main>
          <CityImage cityImage={cityImage} cityName={name} />
          <Summary cityDetails={cityDetails} />
          <QualityOfLife cityDetails={cityDetails} />
        </main>
      )}
    </>
  );
};

Details.propTypes = {
  name: PropTypes.string.isRequired
};
