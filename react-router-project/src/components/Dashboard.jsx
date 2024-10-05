import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate();
    function handleClick1() {
        navigate('/about');
    }
    function handleClick2() {
        navigate('/');
    }
  return (
    <div><h1>This is Dashboard Page</h1>
        <br />
        <button onClick={handleClick1}>
            About Page
        </button>
        <br />
        <br />
        <button onClick={handleClick2}>
            Home Page
        </button>
        <br />
        <Outlet/>
    </div>
  )
}

export default Dashboard