import React from 'react';
import classes from '../css/styles.css';

const NeedsCleanUp = () => (
  <div className={classes.cleanUp}>
    <h3>Uh, oh.</h3>
    <h5>We've got a bit of a mess here, give us a bit to cleans things up!</h5>
    <div><img src="https://lets-talk-environment.s3-us-west-1.amazonaws.com/logos/uh_oh.png" alt="spilledTea" /></div>
  </div>
);

export default NeedsCleanUp;
