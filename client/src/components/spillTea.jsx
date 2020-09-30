import React from 'react';
import SpeechRecognition from 'react-speech-recognition';
import DictaphoneWidget from '../Dictaphones/dictaphone.jsx';
import ExtrasBox from './ExtrasBox.jsx';
import classes from '../css/styles.css';

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
  return (
    <div>
      <h2 className={classes.titleBuffer}>Spill Some Tea and I'll listen</h2>
      <div>
        <ExtrasBox
          prompts={prompts}
          handlePromptsChange={handlePromptsChange}
          handleGoalChange={handleGoalChange}
        />
      </div>
      <div>
        <DictaphoneWidget onCountChange={handleCountChange} resetState={resetState} />
      </div>
      <div className={classes.listenBtnsBox}>
        <button type="button" className={classes.listenBtns} onClick={listenContinuously}>Listen</button>
        <button type="button" className={classes.listenBtns} onClick={SpeechRecognition.stopListening}>Stop</button>
      </div>
    </div>
  );
};

export default SpillTea;
