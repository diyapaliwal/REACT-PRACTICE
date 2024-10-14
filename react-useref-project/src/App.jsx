import './App.css'
import { useEffect, useState, useRef } from 'react'
function App() {
  const [count, setCount] = useState(0);
  let btnRef=useRef(0);
  let val=useRef(0);
  function handleIncrement() {
    val.current=val.current+1;
    console.log("value of val: ",val.current);
    setCount(count + 1); 
  }
  //it runs on every render
  useEffect(() => { 
    console.log('mein firse render hogaya hoon');
  });
  function changeColor(){
    btnRef.current.style.backgroundColor="red";

  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button ref={btnRef} onClick={handleIncrement}>Increment</button>
      <div>
      <button onClick={changeColor}>change color</button>
      </div>
    </div>
  )
}

export default App


//useRef is used to store the reference of the element

//steps to use useRef
//1. import useRef from react
//2. create a variable using useRef
//3. attach the variable to the element using ref attribute
//4. access the element using the variable using .current property