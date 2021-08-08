import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className='logo-container'>
      <img src={logo} alt='compass logo' className='logo-img' />
      <h1>CYOA</h1>
      <nav>
        {pathname === '/' && (
          <NavLink to='/favorites' exact>
            <button className='nav-button' id='favorites-btn'>
              <span className='fas fa-user'></span>
              Favorites
            </button>
          </NavLink>
        )}

        {pathname !== '/' && (
          <NavLink to='/' id='explore-btn' exact>
            <span className='fas fa-home'></span> Explore
          </NavLink>
        )}
      </nav>
    </header>
  );
};
