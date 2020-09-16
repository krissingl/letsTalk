import React from 'react';
import SpeechRecognition from 'react-speech-recognition';
// import axios from 'axios';
import DictaphoneWidget from '../Dictaphones/dictaphone.jsx';
import classes from '../css/styles.css';
import thoughtPrompts from '../../dist/thoughtPrompts.json';

const SpillTea = ({
  handlePromptsChange,
  handleCountChange,
  handleGoalChange,
  resetState,
  prompts,
}) => {
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
  }
  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: 'en-GB',
    });
  };
  const getThoughtPrompt = () => {
    const { length } = thoughtPrompts.easyThoughtPrompts;
    const randomIndex = Math.floor(Math.random() * length);
    return thoughtPrompts.easyThoughtPrompts[randomIndex];
  };
  return (
    <div>
      <h2>Spill Some Tea and I'll listen</h2>
      <div>
        <div>
          <div className={classes.promptBox}>
            <h4>Don't Know What to Talk About? Get a prompt here!</h4>
            <button type="button" className={classes.promptBtn} onClick={() => { const thoughtPrompt = getThoughtPrompt(); handlePromptsChange(thoughtPrompt); }}>Prompt Please!</button>
            <div>
              {prompts}
            </div>
            <h4>You can set a word count goal here:</h4>
            <input
              className={classes.goalInput}
              placeholder="Place goal here! Default is 100"
              onChange={handleGoalChange}
            />
          </div>
        </div>
      </div>
      <DictaphoneWidget onCountChange={handleCountChange} resetState={resetState} />
      <div className={classes.listenBtnsBox}>
        <button type="button" className={classes.listenBtns} onClick={listenContinuously}>Listen</button>
        <button type="button" className={classes.listenBtns} onClick={SpeechRecognition.stopListening}>Stop</button>
      </div>
    </div>
  );
};

export default SpillTea;
