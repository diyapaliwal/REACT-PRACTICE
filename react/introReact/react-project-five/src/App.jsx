import './App.css'
import {useState} from 'react'
import Card from './components/Card'

function App() {
  const [name, setName] = useState('');
  return(
    <div>
  <Card name={name} setName={setName}/>
  <p>i am inside parent component and value of name is {name} </p>
  </div>
)}

export default App