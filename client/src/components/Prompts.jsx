import React from 'react';
import classes from '../css/styles.css';
import thoughtPrompts from '../../dist/thoughtPrompts.json';

const PromptBox = ({
  prompts,
  pType,
  handlePromptsChange,
  handlePTypeChange,
}) => {
  const promptTypesList = Object.keys(thoughtPrompts).map((promptType) => (
    <option key={promptType} value={promptType}>{thoughtPrompts[promptType].type}</option>
  ));

  const getThoughtPrompt = () => {
    const promptObj = thoughtPrompts[pType];
    const promptArr = promptObj.prompts;
    const { length } = promptArr;
    const randomIndex = Math.floor(Math.random() * length);
    return promptArr[randomIndex];
  };
  const findTypePrompts = (e) => {
    handlePTypeChange(e.target.value);
  };
  return (
    <div className={classes.promptBox}>
      <h5>Don't Know What to Talk About? Get a prompt here!</h5>
      <div>
        <span>Select Prompt Type:</span>
        <select onChange={findTypePrompts}>
          {promptTypesList}
        </select>
      </div>
      <button type="button" className={classes.promptBtn} onClick={() => { const thoughtPrompt = getThoughtPrompt(); handlePromptsChange(thoughtPrompt); }}>Prompt Please!</button>
      <div>
        {prompts}
      </div>
    </div>
  );
};

export default PromptBox;
