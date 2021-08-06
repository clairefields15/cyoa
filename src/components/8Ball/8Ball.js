import React, { useEffect, useState } from 'react';
import eightBallFilled from '../../images/eightBallFilled.png';
import eightBallBLUE from '../../images/eightBallBLUE.png';
import PropTypes from 'prop-types';
import './8Ball.css';

export const EightBall = ({ cityName }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <section className='magic-8-ball'>
      {!clicked && <img src={eightBallFilled} alt='Magic 8 ball' />}
      {clicked && <img src={eightBallBLUE} alt='Magic 8 ball' />}
      <button onClick={() => setClicked(!clicked)}>
        Should I move to {cityName}?
      </button>
    </section>
  );
};

EightBall.propTypes = {
  cityName: PropTypes.string.isRequired
};
