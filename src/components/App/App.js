import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from '../Main/Main';
import { ErrorComponent } from '../ErrorComponent/ErrorComponent';
import { Favorites } from '../Favorites/Favorites';
import { ScrollToTop } from '../../helper-fns/ScrollToTop';
import { fetchAllCities, fetchCity } from '../../helper-fns/apiCalls';

export const App = () => {
  const [allCities, setAllCities] = useState([]);
  const [city, setCity] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchCities = async () => {
      setIsLoading(true);
      setErrorMessage('');
      try {
        let data = await fetchAllCities();
        setAllCities(data);
      } catch (error) {
        setErrorMessage(error.message);
      }
      setIsLoading(false);
    };

    fetchCities();
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      setErrorMessage('');
      try {
        let randomCity =
          allCities[Math.floor(Math.random() * allCities.length)];
        let cityDetails = await fetchCity(randomCity.href);
        setCity(cityDetails);
      } catch (error) {
        setErrorMessage(error.message);
      }
      setIsLoading(false);
    };

    fetchDetails();
  }, [allCities]);

  // useEffect(() => {
  //   let randomCity = allCities[Math.floor(Math.random() * allCities.length)];
  //   setCity(randomCity);
  //   fetchCity(randomCity.apiLink);
  // }, [allCities]);

  return (
    <Switch>
      <ScrollToTop />
      <Route exact path='/' render={() => <Main />} />

      <Route exact path='/favorites' render={() => <Favorites />} />

      <Route
        render={() => (
          <ErrorComponent errorMessage="Sorry that page doesn't exist, would you like to go home?" />
        )}
      />
    </Switch>
  );
};
