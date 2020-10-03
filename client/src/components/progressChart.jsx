import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import classes from '../css/styles.css';

const ProgressChart = ({ wordCount, goal }) => {
  const progress = wordCount / goal;
  const percentage = progress * 100;
  console.log(percentage);
  console.log(goal);
  return (
    <CircularProgressbar
      value={progress}
      maxValue={1}
      text={`${percentage.toFixed(1)}%`}
      styles={buildStyles({
        // Rotation of path and trail, in number of turns (0-1)
        rotation: 0.25,

        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: 'butt',

        // Text size
        textSize: '16px',

        // How long animation takes to go from one percentage to another, in seconds
        pathTransitionDuration: 0.5,

        // Can specify path transition in more detail, or remove it entirely
        // pathTransition: '',

        // Colors
        pathColor: `olivedrab`,
        textColor: '#f88',
        trailColor: '#d6d6d6',
        backgroundColor: 'red',
      })}
    />
  );
};

export default ProgressChart;
