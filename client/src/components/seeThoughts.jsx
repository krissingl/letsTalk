import React from 'react';
import Thoughts from './thoughts.jsx';
import classes from '../css/styles.css';
import NeedsCleanUp from './needsCleanUp.jsx';

const SeeThoughts = ({ thoughts }) => (
  <div>
    <NeedsCleanUp />
    {/* <div className={classes.editThoughtsBox}>
      <h3>See all the thoughts we've gathered so far!</h3>
      <button type="button" className={classes.editBtn}>Edit Thoughts</button>
    </div>
    <Thoughts thoughts={thoughts} /> */}
  </div>
);

export default SeeThoughts;
