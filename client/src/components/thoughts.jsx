import React from 'react';
import classes from '../css/styles.css';

const formatTime = (time) => {
  // console.log(new Date());
  const currentTime = new Date(JSON.parse(time));
  console.log(currentTime);
  const year = currentTime.getFullYear();
  const month = Number(currentTime.getMonth());
  const day = currentTime.getDate();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const monthList = {
    0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June', 6: 'July', 7: 'August', 8: 'September', 9: 'October', 10: 'November', 11: 'December',
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
