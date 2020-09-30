import React from 'react';
import classes from '../css/styles.css';

const HomePage = () => (
  <div className={classes.homeTitle}>
    <h4>WELCOME TO</h4>
    <h1>LET'S TALK</h1>
    <div><img className={classes.teacup} src="https://lets-talk-environment.s3-us-west-1.amazonaws.com/logos/teaCup.png" alt="teacup" /></div>
  </div>
);

export default HomePage;
