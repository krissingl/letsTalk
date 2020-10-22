import React, { useState } from 'react';
import Dictaphone from './dictaphoneSetup.jsx';

const DictaphoneWidget = ({ onCountChange, resetState, toggleEditThot }) => {
  const [message] = useState('');
  return (
    <div>
      <p>{message}</p>
      <Dictaphone
        onCountChange={onCountChange}
        resetState={resetState}
        toggleEditThot={toggleEditThot}
      />
    </div>
  );
};

export default DictaphoneWidget;
