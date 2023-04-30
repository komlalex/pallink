import React from 'react';
//import {FaHome} from "react-icons"

function Landing() {
  return (
    <div className='landing'>
        <nav className='landing-navbar'>
            <div className='brand-title'> Pallink</div>
            <div className='navbar-links'>
                <ul>
                    <li><a href="#f">Sign Up</a></li>
                    <li><a href="#f">Log In</a></li>
                </ul>
            </div>
        </nav>












        <div className="greeting">
        <h1>Welcome to Pallink!!!</h1>
        <h2>Link up with Amazing People Today</h2>
        </div>
        
        <p>Kick Start an Amazing Experience by <a href='#f'>Signing Up.</a></p>
        <p>Already have an account? <a href='#f'>Log In</a> here.</p>
    </div>
    
  )
}

export default Landing