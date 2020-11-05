import React, { useState } from 'react';
import ProgressChart from './progressChart.jsx';
import PromptBox from './Prompts.jsx';
import classes from '../css/styles.css';

const ExtrasBox = ({
  handlePromptsChange,
  handlePTypeChange,
  prompts,
  pType,
  wordCount,
}) => {
  const [goal, handleGoalChange] = useState(100);
  return (
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
};

export default ExtrasBox;
