import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from '../Main/Main';
import { ErrorComponent } from '../ErrorComponent/ErrorComponent';
import { Favorites } from '../Favorites/Favorites';

export const App = () => {
  return (
    <Switch>
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
