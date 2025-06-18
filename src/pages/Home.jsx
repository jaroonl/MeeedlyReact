import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-title">🏠 Home Page</h1>
      <div className="home-counter">Counter: {count}</div>
      <div className="button-group">
        <button
          className="button increase"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
        <button
          className="button decrease"
          onClick={handleDecrease}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Home;
