import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import spinningLogo from '../../images/compass-spin.gif';
import './Header.css';

export const Header = () => {
  const { pathname } = useLocation();
  const [hover, setHover] = useState(false);

  return (
    <header>
      <NavLink
        to='/'
        exact
        className='link'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className='logo'>
          {hover && (
            <img src={spinningLogo} alt='compass logo' className='logo-img' />
          )}
          {!hover && <img src={logo} alt='compass logo' className='logo-img' />}
          <h1>CYOA</h1>
        </div>
      </NavLink>

      {pathname === '/' && (
        <nav>
          <NavLink to='/favorites' exact className='link'>
            <button className='nav-button' id='favorites-btn'>
              <span className='fas fa-star'></span>
              Favorites
            </button>
          </NavLink>
        </nav>
      )}

      {pathname !== '/' && pathname !== '/favorites' && (
        <nav>
          <NavLink to='/favorites' exact className='link fav-page-fav-btn'>
            <button className='nav-button' id='favorites-btn'>
              <span className='fas fa-star'></span>
              Favorites
            </button>
          </NavLink>
        </nav>
      )}
    </header>
  );
};
