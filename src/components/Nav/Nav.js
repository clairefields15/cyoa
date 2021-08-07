import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import './Nav.css';
import home from '../../images/home.png';
import nope from '../../images/nope.png';
import likeBlack from '../../images/likeBlack.png';
import likeRed from '../../images/likeRed.png';
import user from '../../images/user.png';

export const Nav = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/' && (
        <nav>
          <button className='nav-button'>
            <img src={nope} alt="don't like this city" className='nav-icon' />
            Nope
          </button>
          <NavLink
            to='/favorites'
            exact
            activeClassName='hidden-link'
            className='nav-button'
          >
            <img src={user} alt='view favorites' className='nav-icon' />
            Favorites
          </NavLink>
          <button className='nav-button'>
            <img
              src={likeBlack}
              alt='favorite this city'
              className='nav-icon'
            />
            Like
          </button>
        </nav>
      )}
      {pathname !== '/' && (
        <nav>
          <NavLink
            to='/'
            exact
            activeClassName='hidden-link'
            className='nav-button'
          >
            <img src={home} alt='go home' className='nav-icon' />
            Explore
          </NavLink>
        </nav>
      )}
    </>
  );
};
