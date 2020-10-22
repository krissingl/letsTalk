import React from 'react';
import classes from '../css/styles.css';
import NeedsCleanUp from './needsCleanUp.jsx';

const Hangout = () => {
  const setEnvironment = () => {
    console.log('test');
  };
  return (
    <div>
      <NeedsCleanUp />
      {/* <h3>Let's Hangout!</h3>
      <h5>Choose a place:</h5>
      <div className={classes.menuBtnsWithDrops}>
        Choose a Place!
        <div className={classes.dropMenuContents}>
          <button type="button" onClick={setEnvironment}>Place1</button>
          <button type="button" onClick={setEnvironment}>Place2</button>
        </div>
      </div> */}
    </div>
  );
};

export default Hangout;
