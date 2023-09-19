import React, { useState } from 'react';
import "./style.css";

function EightBall(props) {
  const [currentColor, setCurrentColor] = useState('black');
  const [currentMessage, setCurrentMessage] = useState('Think of a Question');

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * props.answers.length);
    const { msg, color } = props.answers[randomIndex];

    setCurrentMessage(msg);
    setCurrentColor(color);
  };

  return (
    <div
      className="eightBall"  
      onClick={handleButtonClick}
      style={{ backgroundColor: currentColor }}
    >
      <b>{currentMessage}</b>
    </div>
  );
}

export default EightBall;