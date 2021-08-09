import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMessage } from '../../helper-fns/apiCalls';
import eightBallFilled from '../../images/eightBallFilled.png';
import eightBallBLUE from '../../images/eightBallBLUE.png';
import './8Ball.css';

export const EightBall = ({ cityName }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    setMessage('');
  }, [cityName]);

  const handleClick = async e => {
    e.preventDefault();
    setMessage('');
    setError('');
    setCount(count + 1);
    await shakeBall(1300);
    try {
      let answer = await fetchMessage('Should I move?');
      setMessage(answer);
    } catch (err) {
      setError(err.message);
    }
  };

  const shakeBall = ms => {
    setShaking(true);
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  useEffect(() => {
    if (message) {
      setShaking(false);
    }
  }, [message]);

  // add a height to the section stay the same size

  return (
    <section className='magic-8-ball'>
      <button onClick={e => handleClick(e)} disabled={error}>
        Should I move to {cityName}?
      </button>
      {count === 0 && !error && (
        <img src={eightBallFilled} alt='Magic 8 ball' />
      )}

      {shaking && !error && (
        <img src={eightBallFilled} alt='Magic 8 ball' className='shaking' />
      )}

      {!shaking && message && !error && (
        <>
          <img src={eightBallBLUE} alt='Magic 8 ball with response' />
          <div className='message-container'>
            <p className='message'>{message}</p>
          </div>
        </>
      )}
      {!!error && (
        <>
          <img src={eightBallBLUE} alt='Magic 8 ball with response' />
          <div className='message-container'>
            <p className='message' style={{ color: 'red' }}>
              {error}
            </p>
          </div>
        </>
      )}
    </section>
  );
};

EightBall.propTypes = {
  cityName: PropTypes.string.isRequired
};
