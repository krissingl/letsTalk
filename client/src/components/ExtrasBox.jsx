import React from 'react';
import ProgressChart from './progressChart.jsx';
import PromptBox from './Prompts.jsx';
import classes from '../css/styles.css';

const ExtrasBox = ({
  handleGoalChange,
  handlePromptsChange,
  handlePTypeChange,
  prompts,
  pType,
  wordCount,
  goal,
}) => (
  <div className={classes.optionBox}>
    <PromptBox
      prompts={prompts}
      pType={pType}
      handlePromptsChange={handlePromptsChange}
      handlePTypeChange={handlePTypeChange}
    />
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
        <ProgressChart wordCount={wordCount} goal={goal} />
      </div>
    </div>
  </div>
);

export default ExtrasBox;
