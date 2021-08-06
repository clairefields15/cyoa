import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from '../Main/Main';
import { ErrorComponent } from '../ErrorComponent/ErrorComponent';
import { Favorites } from '../Favorites/Favorites';
import { ScrollToTop } from '../../helper-fns/ScrollToTop';
import { fetchAllCities, fetchCity } from '../../helper-fns/apiCalls';
import { Logo } from '../Logo/Logo';
import './App.css';

export const App = () => {
  const [allCities, setAllCities] = useState([]);
  const [cityName, setCityName] = useState('');
  const [cityDetails, setCityDetails] = useState({});
  const [cityImage, setCityImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [imageRendered, setImageRendered] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      setIsLoading(true);
      setErrorMessage('');
      try {
        let data = await fetchAllCities();
        setAllCities(data);
      } catch (error) {
        setErrorMessage(error.message);
        // setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      setErrorMessage('');
      try {
        let randomCity =
          allCities[Math.floor(Math.random() * allCities.length)];
        setCityName(randomCity.name);
        let cityDetails = await fetchCity(randomCity.href);
        setCityDetails(cityDetails[0]);
        setCityImage(cityDetails[1]);
      } catch (error) {
        setErrorMessage(error.message);
        // setIsLoading(false);
      }
    };
    fetchDetails();
  }, [allCities]);

  useEffect(() => {
    if (cityImage) {
      setIsLoading(false);
    }
  }, [cityImage]);

  return (
    <>
      <ScrollToTop />
      <Logo />

      {!!errorMessage && !isLoading && (
        <ErrorComponent errorMessage={errorMessage} />
      )}
      {!errorMessage && !isLoading && (
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Main
                cityName={cityName}
                cityDetails={cityDetails}
                cityImage={cityImage}
              />
            )}
          />

          <Route exact path='/favorites' render={() => <Favorites />} />

          <Route
            render={() => (
              <ErrorComponent errorMessage="Sorry that page doesn't exist, would you like to go home?" />
            )}
          />
        </Switch>
      )}
    </>
  );
};
