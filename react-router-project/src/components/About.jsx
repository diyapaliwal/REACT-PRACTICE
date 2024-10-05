import React from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {
    const navigate=useNavigate();
    function handleClick1() {
        navigate('/dashboard');
    }
    function handleClick2() {
        navigate('/');
    }

  return (
    <div>
        <h1>This is About Page</h1>
        <br />
        <button onClick={handleClick1}>
            Dashboard Page
        </button>
        <br />
        <br />
        <button onClick={handleClick2}>
            Home Page
        </button>
    </div>
  )
}

export default About