import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

import spinningLogo from '../../images/compass-spin.gif';

export const Modal = ({ message }) => {
  return (
    <div className='modal'>
      <div className='logo-container-modal'>
        <h2>CYOA</h2>
      </div>
      {message}
      <img src={spinningLogo} alt='compass logo' className='spinning-logo' />
    </div>
  );
};

Modal.propTypes = {
  message: PropTypes.string.isRequired
};
