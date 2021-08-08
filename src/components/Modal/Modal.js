import React from 'react';
import likeRed from '../../images/likeRed.png';
import './Modal.css';

export const Modal = () => {
  return (
    <div className='modal'>
      City added to favorites!
      <img src={likeRed} alt='filled heart' className='in-favs' />
    </div>
  );
};
