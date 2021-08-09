import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from '../Main/Main';
import { ErrorComponent } from '../ErrorComponent/ErrorComponent';
import { Favorites } from '../Favorites/Favorites';
import { ScrollToTop } from '../../helper-fns/ScrollToTop';
import { fetchAllCities, fetchCity } from '../../helper-fns/apiCalls';
import { Header } from '../Header/Header';
import { Modal } from '../Modal/Modal';
import { Details } from '../Details/Details';
import loading from '../../images/loading.gif';

import './App.css';

export const App = () => {
  const [allCities, setAllCities] = useState([]);
  const [cityName, setCityName] = useState('');
  const [cityDetails, setCityDetails] = useState({});
  const [cityImage, setCityImage] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [showLikeModal, setShowLikeModal] = useState(false);
  const [showDislikeModal, setShowDislikeModal] = useState(false);
  const [dislikedCities, setDislikedCities] = useState([]);
  const [noCitiesLeft, setNoCitiesLeft] = useState(false);

  useEffect(() => {
    // to add local storage:
    // pull the disliked cities list out of local storage
    // fetch all cities
    const fetchCities = async () => {
      setIsLoading(true);
      setErrorMessage('');
      try {
        let data = await fetchAllCities();
        // filter through the data for cities that !== the disliked cities
        // remove the disliked cities from allCities before setting in state
        setAllCities(data);
      } catch (error) {
        setErrorMessage(error.message);
        setIsLoading(false);
      }
    };
    fetchCities();
  }, []);

  useEffect(() => {
    if (allCities.length > 1) {
      const fetchDetails = async () => {
        setErrorMessage('');
        try {
          let randomCity =
            allCities[Math.floor(Math.random() * allCities.length)];
          let cityDetails = await fetchCity(randomCity.href);
          setCityDetails(cityDetails[0]);
          setCityImage(cityDetails[1]);
          setCityName(randomCity.name);
        } catch (error) {
          setErrorMessage(error.message);
          setIsLoading(false);
        }
      };
      fetchDetails();
    } else if (allCities.length === 1) {
      const fetchDetails = async () => {
        setErrorMessage('');
        try {
          let randomCity =
            allCities[Math.floor(Math.random() * allCities.length)];
          let cityDetails = await fetchCity(randomCity.href);
          setCityDetails(cityDetails[0]);
          setCityImage(cityDetails[1]);
          setCityName(randomCity.name);
          setNoCitiesLeft(true);
        } catch (error) {
          setErrorMessage(error.message);
          setIsLoading(false);
        }
      };
      fetchDetails();
    }
  }, [allCities]);

  useEffect(() => {
    if (Object.keys(cityImage).length) {
      window.scrollTo(0, 0);
      setIsLoading(false);
      setShowLikeModal(false);
      setShowDislikeModal(false);
    }
  }, [cityImage]);

  const addToFavorites = async () => {
    const duplicate = favorites.find(favorite => favorite.name === cityName);

    if (!duplicate) {
      await showModalTimeout(setShowLikeModal, 1500);
      let city = {
        name: cityName,
        details: cityDetails,
        image: cityImage
      };
      setFavorites([...favorites, city]);
      const newCitiesArray = allCities.filter(city => city.name !== cityName);
      setAllCities(newCitiesArray);
    } else {
      return;
    }
  };

  const removeFromCities = async () => {
    await showModalTimeout(setShowDislikeModal, 1500);
    setDislikedCities([...dislikedCities, cityName]);
    // set this array in local storage!!
    const newCitiesArray = allCities.filter(city => city.name !== cityName);
    setAllCities(newCitiesArray);
  };

  const showModalTimeout = (whichModal, ms) => {
    whichModal(true);
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  return (
    <>
      <ScrollToTop />
      {!showLikeModal && !showDislikeModal && <Header />}
      {noCitiesLeft && !isLoading && (
        <div className='loading-container'>
          <h2>No cities left! Hope you found one.</h2>
        </div>
      )}
      {!errorMessage && isLoading && (
        <div className='loading-container'>
          <h2>Adventure loading</h2>
          <img src={loading} alt='loading...' className='loading-dots' />
        </div>
      )}
      {!!errorMessage && !isLoading && (
        <ErrorComponent errorMessage={errorMessage} />
      )}
      {showLikeModal && (
        <Modal
          message={`${cityName} added to favorites... finding your next city now!`}
        />
      )}
      {showDislikeModal && (
        <Modal message={`You won't see that city again... finding another.`} />
      )}
      {!errorMessage &&
        !isLoading &&
        !showLikeModal &&
        !showDislikeModal &&
        !noCitiesLeft && (
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
                    addToFavorites={addToFavorites}
                    removeFromCities={removeFromCities}
                  />
                )}
              />

              <Route
                exact
                path='/favorites'
                render={() => <Favorites favorites={favorites} />}
              />

              <Route
                path='/favorites/:name'
                render={({ match }) => {
                  const { name } = match.params;
                  return <Details name={name} />;
                }}
              />

              <Route
                render={() => (
                  <ErrorComponent errorMessage="Sorry, that page doesn't exist, would you like to go home?" />
                )}
              />
            </Switch>
          </>
        )}
    </>
  );
};
