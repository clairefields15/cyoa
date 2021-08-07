import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from '../Main/Main';
import { ErrorComponent } from '../ErrorComponent/ErrorComponent';
import { Favorites } from '../Favorites/Favorites';
import { ScrollToTop } from '../../helper-fns/ScrollToTop';
import { fetchAllCities, fetchCity } from '../../helper-fns/apiCalls';
import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { Modal } from '../Modal/Modal';
import './App.css';

export const App = () => {
  const [allCities, setAllCities] = useState([]);
  const [cityName, setCityName] = useState('');
  const [cityDetails, setCityDetails] = useState({});
  const [cityImage, setCityImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const [dislikes, setDislikes] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      setIsLoading(true);
      setErrorMessage('');
      //maybe all cities don't need to be in state??
      try {
        let data = await fetchAllCities();
        setAllCities(data);
      } catch (error) {
        setErrorMessage(error.message);
        setIsLoading(false);
      }
    };
    fetchCities();
  }, []);

  useEffect(() => {
    if (allCities.length) {
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
          setIsLoading(false);
        }
      };
      fetchDetails();
    }
  }, [allCities]);

  useEffect(() => {
    if (cityImage) {
      setIsLoading(false);
      setShowModal(false);
      window.scrollTo(0, 0);
    }
  }, [cityImage]);

  const addToFavorites = async e => {
    // the favorite should only be added if it is unique
    const duplicate = favorites.find(favorite => favorite.name === cityName);

    if (!duplicate) {
      // a modal pops up saying city has been added
      await showModalTimeout(1000);
      let city = {
        name: cityName,
        details: cityDetails,
        image: cityImage
      };
      setFavorites([...favorites, city]);

      // should scroll to the top of the page
      // should see a new city appear automatically
      const newCitiesArray = allCities.filter(city => city.name !== cityName);
      setAllCities(newCitiesArray);
      // window.scrollTo(0, 0);

      // modal should disappear
      // setShowModal(false);

      // you shouldn't see that city again on the main page
      // should be able to click on your favorites and see the city has been added
    } else {
      console.log('duplicate');
      return;
    }
  };

  const showModalTimeout = ms => {
    setShowModal(true);
    // while this is true, other nav buttons should be disabled
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  // useEffect(() => {
  //   if (favorites.length) {
  //     // modal should disappear
  //     setShowModal(false);
  //   }
  // }, [favorites]);

  return (
    <>
      <ScrollToTop />
      <Logo />
      <Nav
        addToFavorites={addToFavorites}
        favorites={favorites}
        cityName={cityName}
      />
      {!errorMessage && isLoading && <h2>Loading...</h2>}
      {!!errorMessage && !isLoading && (
        <ErrorComponent errorMessage={errorMessage} />
      )}
      {showModal && <Modal />}
      {!errorMessage && !isLoading && !showModal && (
        <>
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

            <Route
              exact
              path='/favorites'
              render={() => <Favorites favorites={favorites} />}
            />

            <Route
              render={() => (
                <ErrorComponent errorMessage="Sorry that page doesn't exist, would you like to go home?" />
              )}
            />
          </Switch>
        </>
      )}
    </>
  );
};
