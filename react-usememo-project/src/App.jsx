import './App.css';
import { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(1); // added input state

  function expensiveTask(num) {
    console.log('running expensive task');
    for (let i = 0; i < 1000000000; i++) {} // simulating an expensive task
    return num * 2;
  }

  // useMemo hook to optimize expensiveTask calculation
  const doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      
      {/* Input field to change the value */}
      <input 
        type="number" 
        value={input} 
        onChange={(e) => setInput(Number(e.target.value))} 
      />
      
      <div>
        <h1>Double Value: {doubleValue}</h1>
      </div>
    </div>
  );
}

export default App;
