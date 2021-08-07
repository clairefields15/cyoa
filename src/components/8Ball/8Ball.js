import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fetchMessage } from '../../helper-fns/apiCalls';
import eightBallFilled from '../../images/eightBallFilled.png';
import eightBallBLUE from '../../images/eightBallBLUE.png';
import './8Ball.css';

export const EightBall = ({ cityName }) => {
  const [clicked, setClicked] = useState(false);
  const [message, setMessage] = useState('');

  const handleClick = async e => {
    e.preventDefault();
    setClicked(!clicked);
    if (!clicked) {
      let answer = await fetchMessage('Should I move?');
      console.log(answer);
      setMessage(answer);
    } else {
      setMessage('');
    }
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
