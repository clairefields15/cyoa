import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import loading from '../../images/loading.gif';
import logo from '../../images/logo.png';

export const Modal = ({ message }) => {
  return (
    <div className='modal'>
      <div className='logo-container-modal'>
        <img
          src={logo}
          alt='compass logo'
          className='logo-img'
          id='logoModal'
        />
        <h2>CYOA</h2>
      </div>
      {message}
      <img src={loading} alt='loading...' className='loading-dots' />
    </div>
  );
};

Modal.propTypes = {
  message: PropTypes.string.isRequired
};
