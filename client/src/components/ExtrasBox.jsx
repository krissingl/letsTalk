import React from 'react';
import ProgressChart from './progressChart.jsx';
import classes from '../css/styles.css';
import thoughtPrompts from '../../dist/thoughtPrompts.json';

const ExtrasBox = ({ handleGoalChange, handlePromptsChange, prompts }) => {
  const getThoughtPrompt = () => {
    const { length } = thoughtPrompts.easyThoughtPrompts;
    const randomIndex = Math.floor(Math.random() * length);
    return thoughtPrompts.easyThoughtPrompts[randomIndex];
  };
  return (
    <div className={classes.optionBox}>
      <div className={classes.promptBox}>
        <h5>Don't Know What to Talk About? Get a prompt here!</h5>
        <button type="button" className={classes.promptBtn} onClick={() => { const thoughtPrompt = getThoughtPrompt(); handlePromptsChange(thoughtPrompt); }}>Prompt Please!</button>
        <div>
          {prompts}
        </div>
      </div>
      <div className={classes.wordCountBox}>
        <div>
          <h5>You can set a word count goal here:</h5>
          <input
            className={classes.goalInput}
            placeholder="Place goal here! Default is 100"
            onChange={handleGoalChange}
          />
        </div>
        <div className={classes.progressChart}>
          <ProgressChart />
        </div>
      </div>
    </div>
  );
};

export default ExtrasBox;
