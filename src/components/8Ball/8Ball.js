import React, { useEffect, useState, useCallback } from 'react';
import eightBallFilled from '../../images/eightBallFilled.png';
import eightBallBLUE from '../../images/eightBallBLUE.png';
import PropTypes from 'prop-types';
import './8Ball.css';

export const EightBall = ({ cityName }) => {
  const [clicked, setClicked] = useState(false);
  const [message, setMessage] = useState('HELLO');

  const handleClick = e => {
    e.preventDefault();
    setClicked(!clicked);
    //fetch from 8ball API
    //uppercase message
    // set returned message in state
    // conditionally render the message in the blue ball
  };

  // const handleClick = useCallback(
  //   e => {
  //     e.preventDefault();
  //     setClicked(!clicked);
  //   },
  //   [clicked]
  // );

  return (
    <section className='magic-8-ball'>
      {!clicked && <img src={eightBallFilled} alt='Magic 8 ball' />}
      {clicked && (
        <>
          <img src={eightBallBLUE} alt='Magic 8 ball' />
          <div className='message-container'>
            <p className='message'>{message}</p>
          </div>
        </>
      )}
      <button onClick={e => handleClick(e)}>
        Should I move to {cityName}?
      </button>
    </section>
  );
};

EightBall.propTypes = {
  cityName: PropTypes.string.isRequired
};
