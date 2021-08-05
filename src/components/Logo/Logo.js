import React from 'react';
import logo from '../../images/logo.png';
import './Logo.css';

export const Logo = () => {
  return (
    <div className='logo-container'>
      <img src={logo} alt='compass logo' className='logo-img' />
      <h1>CYOA</h1>
    </div>
  );
};
