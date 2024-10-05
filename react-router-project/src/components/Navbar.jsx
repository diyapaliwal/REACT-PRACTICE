import './Navbar.css'
import React from 'react'
import Home from './Home'
import Dashboard from './Dashboard'
import About from './About'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to="/" className={({isActive})=>isActive? "active-link":""}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard" className={({isActive})=>isActive? "active-link":""}>Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive})=>isActive? "active-link":""}>About</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
