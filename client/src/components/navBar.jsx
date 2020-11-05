/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import classes from '../css/styles.css';

const NavBar = ({ changePage }) => (
  <div className={classes.navBarBox}>
    <div onClick={() => { changePage('home'); }} className={classes.imgDiv}>
      <img src="https://lets-talk-environment.s3-us-west-1.amazonaws.com/logos/logo.png" alt="letsTalkLogo" className={classes.logo} />
    </div>
    <div className={classes.navBar}>
      <button className={classes.menuBtn} onClick={() => { changePage('home'); }} type="button">Home</button>
      <button className={classes.menuBtn} onClick={() => { changePage('hangout'); }} type="button">Hangout</button>
      <button className={classes.menuBtn} onClick={() => { changePage('thoughts'); }} type="button">See Thoughts</button>
      <button className={classes.menuBtn} onClick={() => { changePage('spillTea'); }} type="button">Let's Have Tea</button>
    </div>
  </div>
);

export default NavBar;
