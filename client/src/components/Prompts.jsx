import React from 'react';
import classes from '../css/styles.css';
import thoughtPrompts from '../../dist/thoughtPrompts.json';

const PromptBox = ({ prompts, handlePromptsChange }) => {
  console.log(thoughtPrompts.promptTypes);
  let pType;
  const promptTypesList = thoughtPrompts.promptTypes.map((promptType) => (
    <option value={promptType.prompts}>{promptType.type}</option>
  ));
  const getThoughtPrompt = ({ promptsArray }) => {
    const { length } = promptsArray;
    const randomIndex = Math.floor(Math.random() * length);
    return promptsArray[randomIndex];
  };
  const findType = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className={classes.promptBox}>
      <h5>Don't Know What to Talk About? Get a prompt here!</h5>
      <div>
        <span>Select Prompt Type:</span>
        <select onChange={findType}>
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
