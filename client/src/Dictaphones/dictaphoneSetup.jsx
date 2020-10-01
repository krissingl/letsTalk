import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios from 'axios';
import classes from '../css/styles.css';

const Dictaphone = ({ commands, onCountChange, resetState }) => {
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition({ commands });
  useEffect(() => {
    if (finalTranscript !== '') {
      console.log('Got final result:', finalTranscript);
      // eslint-disable-next-line prefer-const
      let words = finalTranscript.split(' ');
      const currentWordCount = words.length;
      onCountChange(currentWordCount);
    }
  }, [interimTranscript, finalTranscript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  const saveThoughts = (thoughts) => {
    console.log('Did saveThoughts fire? Did it shoot thot: ', thoughts);
    let currentDate = new Date();
    currentDate = JSON.stringify(currentDate);
    axios({
      method: 'post',
      url: '/thoughts',
      data: {
        thought: thoughts,
        timestamp: currentDate,
      },
    });
  };

  return (
    <div>
      <div className={classes.speechControlBox}>
        <span className={classes.listeningSpan}>
          listening:
          {' '}
          {listening ? 'on' : 'off'}
        </span>
        <div className={classes.resetAndSaveBox}>
          <button type="button" className={classes.resetAndSaveBtn} onClick={() => { resetTranscript(); resetState(); }}>Reset</button>
          <button type="button" className={classes.resetAndSaveBtn} onClick={() => { saveThoughts(finalTranscript); }}>Save Thoughts</button>
        </div>
      </div>
      <div className={classes.wordsBox}>
        <span className={classes.words}>{transcript}</span>
      </div>
    </div>
  );
};

export default Dictaphone;
