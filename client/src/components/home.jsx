import React from 'react';
import classes from '../css/styles.css';

const HomePage = () => (
  <div className={classes.homeTitle}>
    <h4>WELCOME TO</h4>
    <h1>LET'S TALK</h1>
    <p className={classes.homeSummary}>
      Would you like some practice speaking for social settings?
      <br />
      Small talk, telling stories, interviewing for a job?
      <br />
      Talk to me and I'll hear you out!
      <br />
      Select the "Let's Have Tea" tab at the top to get started!
    </p>
    <div><img className={classes.teacup} src="https://lets-talk-environment.s3-us-west-1.amazonaws.com/logos/teaCup.png" alt="teacup" /></div>
  </div>
);

export default HomePage;
