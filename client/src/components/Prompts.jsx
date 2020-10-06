import React from 'react';
import classes from '../css/styles.css';
import thoughtPrompts from '../../dist/thoughtPrompts.json';

const PromptBox = ({ prompts, handlePromptsChange }) => {
  const promptTypesList = Object.keys(thoughtPrompts).map((promptType) => (
    <option key={promptType} value={promptType}>{thoughtPrompts[promptType].type}</option>
  ));
  console.log(Object.keys(thoughtPrompts));
  const getThoughtPrompt = (promptsArray) => {
    console.log(promptsArray);
    const { length } = promptsArray;
    const randomIndex = Math.floor(Math.random() * length);
    return promptsArray[randomIndex];
  };
  const findTypePrompts = (e) => {
    const promptObj = thoughtPrompts[e.target.value];
    console.log(promptObj);
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
      <button type="button" className={classes.promptBtn} onClick={() => { const thoughtPrompt = getThoughtPrompt(pArray); handlePromptsChange(thoughtPrompt); }}>Prompt Please!</button>
      <div>
        {prompts}
      </div>
    </div>
  );
};

export default PromptBox;
