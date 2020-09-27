import React from 'react';
import classes from '../css/styles.css';

const formatTime = (time) => {
  // console.log(new Date());
  const year = time.slice(0, 4);
  const month = Number(time.slice(5, 7));
  const day = time.slice(8, 10);
  const hour = Number(time.slice(11, 13));
  const minute = time.slice(14, 16);
  const monthList = {
    1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December',
  };
  const timeList = {
    1: '1 am', 2: '2 am', 3: '3 am', 4: '4 am', 5: '5 am', 6: '6 am', 7: '7 am', 8: '8 am', 9: '9 am', 10: '10 am', 11: '11 am', 12: '12 pm', 13: '1 pm', 14: '2 pm', 15: '3 pm', 16: '4 pm', 17: '5 pm', 18: '6 pm', 19: '7 pm', 20: '8 pm', 21: '9 pm', 22: '10 pm', 23: '11 pm', 24: '12 am',
  };
  const timeArray = timeList[hour].split(' ');
  return `${monthList[month]} ${day}, ${year} at ${timeArray[0]}:${minute}${timeArray[1]}`;
};

const Thoughts = ({ thoughts }) => {
  const thoughtsList = thoughts.map((thot) => (
    <div key={thot.id}>
      <button type="button" className={classes.timeBtn}>{formatTime(thot.id)}</button>
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
