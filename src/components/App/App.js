import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from '../Main/Main';
import { ErrorComponent } from '../ErrorComponent/ErrorComponent';
import { Favorites } from '../Favorites/Favorites';
import { ScrollToTop } from '../../helper-fns/ScrollToTop';
import { fetchAllCities } from '../../helper-fns/apiCalls';

export const App = () => {
  const [allCities, setAllCities] = useState([]);
  const [city, setCity] = useState({});

  useEffect(() => {
    fetchAllCities().then(data => setAllCities(data));
  }, []);

  useEffect(() => {
    let randomCity = allCities[Math.floor(Math.random() * allCities.length)];
    setCity(randomCity);
  }, [allCities]);

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
