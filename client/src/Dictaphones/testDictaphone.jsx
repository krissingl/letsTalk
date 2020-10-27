import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone1 = ({ commands }) => {
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
    }
  }, [interimTranscript, finalTranscript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <div>
      <div>
        <span>
          listening:
          {' '}
          {listening ? 'on' : 'off'}
        </span>
        <div>
          <button type="button" onClick={resetTranscript}>Reset</button>
        </div>
      </div>
      <div>
        <span>{transcript}</span>
      </div>
    </div>
  );
};

export default Dictaphone1;
