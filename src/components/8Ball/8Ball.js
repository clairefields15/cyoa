import React, { useState } from 'react';
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

  const handleClick = async e => {
    e.preventDefault();
    setMessage('');
    setError('');
    setCount(count + 1);
    await shakeBall(2000);
    try {
      let answer = await fetchMessage('Should I move?');
      setMessage(answer);
      setShaking(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const shakeBall = ms => {
    setShaking(true);
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  return (
    <section className='magic-8-ball'>
      {count === 0 && !error && (
        <img src={eightBallFilled} alt='Magic 8 ball' />
      )}

      {shaking && !error && (
        <img src={eightBallFilled} alt='Magic 8 ball' className='shaking' />
      )}

      {!shaking && message && !error && (
        <>
          <img src={eightBallBLUE} alt='Magic 8 ball' />
          <div className='message-container'>
            <p className='message'>{message}</p>
          </div>
        </>
      )}

      {!!error && (
        <>
          <img src={eightBallBLUE} alt='Magic 8 ball' />
          <div className='message-container'>
            <p className='message' style={{ color: 'red' }}>
              {error}
            </p>
          </div>
        </>
      )}
      <button onClick={e => handleClick(e)} disabled={error}>
        Should I move to {cityName}?
      </button>
    </section>
  );
};

EightBall.propTypes = {
  cityName: PropTypes.string.isRequired
};
