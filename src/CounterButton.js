import React, { useState } from 'react';
import './CounterButton.css'; // Import your CSS file

const CounterButton = () => {
  const [count, setCount] = useState(27);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="CounterButton">
      <h2 className="CounterValue">Counter Value: {count}</h2>
      <button className="Button" onClick={incrementCount}>Increment Counter</button>
    </div>
  );
};

export default CounterButton;
