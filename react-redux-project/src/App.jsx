import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, reset } from './features/counter/CounterSlice';
import { useState } from 'react';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function handleResetClick() {
    dispatch(reset());
  }
  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleThemeToggle() {
    setIsDarkTheme((prevTheme) => !prevTheme);
  }

  return (
    <div className={`container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <button onClick={handleDecrementClick}>-</button>

      <p>Count: {count}</p>

      <button onClick={handleIncrementClick}>+</button>

      <button className="theme-button" onClick={handleThemeToggle}>
        {isDarkTheme ? '☀️' : '🌙'}
      </button>
<br />
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
}

export default App;