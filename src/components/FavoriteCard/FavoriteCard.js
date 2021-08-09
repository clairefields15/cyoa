import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './FavoriteCard.css';

export const FavoriteCard = ({ favorite, removeFromFavorites }) => {
  const [hover, setHover] = useState(false);
  const [imageHover, setImageHover] = useState(false);
  let { name, image } = favorite;

  return (
    <section className='card'>
      <div className='city-name-fav'>
        {name}

        <button
          className='remove-btn'
          aria-label={`Remove ${name} from favorites`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => removeFromFavorites(name)}
        >
          {hover && (
            <>
              <span
                className='fas fa-heart-broken fav-heart'
                aria-hidden='true'
              ></span>
            </>
          )}
          {!hover && (
            <span className='fas fa-heart fav-heart' aria-hidden='true'></span>
          )}
        </button>
      </div>

      <NavLink to={`/favorites/${name}`} className='link'>
        <div
          className='img-container-fav'
          onMouseEnter={() => setImageHover(true)}
          onMouseLeave={() => setImageHover(false)}
        >
          {imageHover && (
            <>
              <img
                src={image.mobile}
                alt={`Beautiful ${name}`}
                className='city-img-fav opaque'
              />
              <p className='hovered-text'>Click to see details</p>
            </>
          )}
          {!imageHover && (
            <>
              <img
                src={image.mobile}
                alt={`Beautiful ${name}`}
                className='city-img-fav'
              />
            </>
          )}
        </div>
      </NavLink>
    </section>
  );
};

FavoriteCard.propTypes = {
  favorite: PropTypes.object.isRequired,
  removeFromFavorites: PropTypes.func.isRequired
};
