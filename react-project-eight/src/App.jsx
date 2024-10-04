import './App.css'
import {useState} from 'react'
import{useEffect} from 'react'
function App() {
  const [count, setCount]=useState(0);
  // const [total, setTotal]=useState(1);
  // validation 1
  // useEffect(() => {
  //   alert('count tapped')
  // })
  // validation 2
  useEffect(() => {
    const intervalId=setInterval(()=>{
      setCount(Count=>Count+1)
    },1000) // 1000 -> 1 second
    return()=>{
      clearInterval(intervalId)
    }
  },[])

  function handleClick(){
    setCount(count+1)
  }

  // function handleClickTotal(){
  //   setCount(count+1)
  // }

  return(
    <div>
      <button onClick={handleClick}>click me</button>
      <br />
      Count is: {count}

      {/* <br />
      <button onClick={handleClickTotal}>click me</button>
      <br />
      Total is: {total} */}
    </div>
  )
}

export default App