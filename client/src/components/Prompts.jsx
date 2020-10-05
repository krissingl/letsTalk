import React from 'react';
import classes from '../css/styles.css';
import thoughtPrompts from '../../dist/thoughtPrompts.json';

const PromptBox = ({ prompts, handlePromptsChange }) => {
  let pArray;

  const promptTypesList = thoughtPrompts.promptTypes.map((promptType) => (
    <option key={promptType.key} value={promptType.key}>{promptType.type}</option>
  ));
  const getThoughtPrompt = (promptsArray) => {
    console.log(promptsArray);
    const { length } = promptsArray;
    const randomIndex = Math.floor(Math.random() * length);
    return promptsArray[randomIndex];
  };
  const findTypePrompts = (e) => {
    const type = e.target.value;
    for (let i = 0; i < thoughtPrompts.promptTypes.length; i++) {
      if (thoughtPrompts.promptTypes[i][type]) {
        pArray = thoughtPrompts.promptTypes[i][type];
      }
    }
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
