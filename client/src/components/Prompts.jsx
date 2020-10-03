import React from 'react';
import classes from '../css/styles.css';
import thoughtPrompts from '../../dist/thoughtPrompts.json';

const PromptBox = ({ prompts, handlePromptsChange }) => {
  console.log(thoughtPrompts.promptTypes);
  const promptTypesList = thoughtPrompts.promptTypes.map((promptType) => (
    <option>{promptType.type}</option>
  ));
  const getThoughtPrompt = () => {
    const { length } = thoughtPrompts.easyThoughtPrompts;
    const randomIndex = Math.floor(Math.random() * length);
    // need to create a thought prompt selector to select type of prompt
    return thoughtPrompts.easyThoughtPrompts[randomIndex];
  };
  return (
    <div className={classes.promptBox}>
      <h5>Don't Know What to Talk About? Get a prompt here!</h5>
      <div>
        <span>Select Prompt Type:</span>
        <select>
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
