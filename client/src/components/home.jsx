import React from 'react';
import classes from '../css/styles.css';

const HomePage = () => (
  <div className={classes.homePage}>
  <div className={classes.homeTitle}>
    <h4>WELCOME TO</h4>
    <h1>LET'S TALK</h1>
    <h4>Please Sign In</h4>
    <div>
      <form>
        <input placeholder="Username"></input>
        <input placeholder="Password"></input>
      </form>
    </div>
    <h4>Or if you're new click here to sign up!</h4>
    <button type="button">Sign Me Up!</button>
  </div>
    <div><img className="teacup" src="https://lets-talk-environment.s3-us-west-1.amazonaws.com/logos/teaCup.png" alt="teacup" /></div>
  </div>
);

export default HomePage;
