import React from 'react';
import classes from '../css/styles.css';

const HomePage = () => (
  <div className={classes.homeTitle}>
    <h3>WELCOME TO</h3>
    <h1>LET'S TALK</h1>
    <div><img className="teacup" src="https://lets-talk-environment.s3-us-west-1.amazonaws.com/logos/teaCup.png" alt="teacup" /></div>
  </div>
);

export default HomePage;
