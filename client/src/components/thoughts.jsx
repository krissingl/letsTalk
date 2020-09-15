import React from 'react';
import classes from '../css/styles.css';

const Thoughts = ({ thoughts }) => {
  const thoughtsList = thoughts.map((thot) => (
    <div key={thot.id}>
      <button type="button" className={classes.timeBtn}>{thot.id}</button>
      <p>{thot.doc.thought}</p>
    </div>
  ));
  return (
    <div className={classes.thoughtListBox}>
      <ul className={classes.thoughtList}>{thoughtsList}</ul>
    </div>
  );
};

export default Thoughts;
