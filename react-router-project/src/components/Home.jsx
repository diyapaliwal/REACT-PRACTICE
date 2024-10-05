import React from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    function handleClick1() {
        navigate('/about');
    }
    function handleClick2() {
        navigate('/dashboard');
    }
  return (
    <div>
        <h1>This is Home Page</h1>
        <br />
        <button onClick={handleClick1}>
            About Page
        </button>
        <br />
        <br />
        <button onClick={handleClick2}>
            Dashboard Page
        </button>
    </div>
  )
}

export default Home