import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';


import ReactPlayer from 'react-player'



const Header = () => {
    return (
        <header>
        <div className="xbox_logo"></div>
        
        <Link className="versus_one" to="/">VS</Link>
        <Link  className="versus_two" to="/">VS</Link>
        <div className="alien_logo">
    
        </div>
    
        <div className="Ps4_logo">
    
        </div>
    
        <a href="#footer" className="signup">Sign Up</a>
        <a href="#" className="about_us">About Us</a>
        <h1>Game World!</h1>
        <ReactPlayer  url="https://youtu.be/sVEhFrg1QNE" width="100%"/>
            
        
      </header>
        )


    }


    export default Header;
