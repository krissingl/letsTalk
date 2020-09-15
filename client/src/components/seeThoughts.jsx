import React from 'react';
import Thoughts from './thoughts.jsx';

const SeeThoughts = ({ thoughts }) => (
  <div>
    <h3>See all the thoughts we've gathered so far!</h3>
    <Thoughts thoughts={thoughts} />
  </div>
);

export default SeeThoughts;
