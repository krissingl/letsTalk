import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import classes from '../css/styles.css';

const ProgressChart = ({ wordCount, goal }) => {
  const progress = wordCount / goal;
  const percentage = progress * 100;

  return (
    <CircularProgressbar
      value={progress}
      maxValue={1}
      text={`${percentage.toFixed(1)}%`}
      styles={buildStyles({
        rotation: 0.25,
        strokeLinecap: 'butt',
        textSize: '16px',
        pathColor: 'olivedrab',
        textColor: '#f88',
        trailColor: '#d6d6d6',
        backgroundColor: 'red',
      })}
    />
  );
};

export default ProgressChart;
