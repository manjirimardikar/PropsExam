import React from 'react'
import './Navbar.css';


const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='image'>
        <img id='logo' src='https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png' width="200px" height="100px"/>
        </div>
        <div className='navbarmiddle'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
        </div>
        <div className='button'>
        <button>Enquire Now</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar