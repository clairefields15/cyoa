import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <div className='logo'>
        <img src={logo} alt='compass logo' className='logo-img' />
        <h1>CYOA</h1>
      </div>
      <nav>
        {pathname === '/' && (
          <NavLink to='/favorites' exact className='link'>
            <button className='nav-button' id='favorites-btn'>
              <span class='fas fa-star'></span>
              Favorites
            </button>
          </NavLink>
        )}

        {pathname !== '/' && (
          <NavLink to='/' id='explore-btn' exact className='link'>
            <button className='nav-button' id='favorites-btn'>
              <span className='fas fa-home'></span>
              Explore
            </button>
          </NavLink>
        )}
      </nav>
    </header>
  );
};
