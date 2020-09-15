import React, { useState } from 'react';
import Dictaphone from './dictaphoneSetup.jsx';

const DictaphoneWidget = ({ onCountChange, resetState }) => {
  const [message] = useState('');
  return (
    <div>
      <p>{message}</p>
      <Dictaphone onCountChange={onCountChange} resetState={resetState} />
    </div>
  );
};

export default DictaphoneWidget;
