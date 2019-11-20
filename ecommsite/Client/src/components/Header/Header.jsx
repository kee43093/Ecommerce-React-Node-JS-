import React from '../../../node_modules/react';
import "./Header.css";
import { Link } from '../../../node_modules/react-router-dom';
import ReactPlayer from '../../../node_modules/react-player'



const Header = () => {
    return (
            <nav className="nav">
                <ul className="list">
                <img className="logo" src="/images/img.jpg" alt=""/>
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/products">Products</Link></li>
                    <li><Link className="link" to="/Contact">Contact</Link></li>
                    <li><a href="#footer" className="link">Subscribe</a></li>
                    <li><a href="#" className="link">About Us</a></li>
                </ul>
            </nav>       
        )

    }


    export default Header;
