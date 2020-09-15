import React from 'react';
import SpeechRecognition from 'react-speech-recognition';
// import axios from 'axios';
import DictaphoneWidget from '../Dictaphones/dictaphone.jsx';
import classes from '../css/styles.css';

const SpillTea = ({ handleCountChange, handleGoalChange, resetState }) => {
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
      <h3>Spill Some Tea</h3>
      <h5>Word Count Goal:</h5>
      <input
        className={classes.goalInput}
        placeholder="Place goal here! Default is 100"
        onChange={handleGoalChange}
      />
      <DictaphoneWidget onCountChange={handleCountChange} resetState={resetState} />
      <button type="button" onClick={listenContinuously}>Listen</button>
      <button type="button" onClick={SpeechRecognition.stopListening}>Stop</button>
    </div>
  );
};

export default SpillTea;
