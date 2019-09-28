import React from 'react';
import './Hero.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

class Hero extends React.Component {
    render(){
        return(
        <div>
            <header>
                <h1>Gamer World</h1>
                <nav>
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    </ul>
                </nav>
            </header>

            <Carousel>
                        <div>
                        <img src="./images/championshipSlider.jpg" id="lastClone" alt="" />
                            <p className="legend">Legend 1</p>
                        </div>
                        
                        <div>
                        <img src="./images/ps4-june-refresh-slim-horizontal-left-aligned-product-shot-01-us-17nov16.png" alt="" />
                            <p className="legend">Legend 2</p>
                        </div>
                        
                        <div>
                        <img src="/images/xboxoneSlider.jpg" alt="" />
                            <p className="legend">Legend 3</p>
                        </div>
                        
                        <div>
                        <img src="/images/alienWareSlider.webp" id="lastClone" alt="" />
                            <p className="legend">Legend 1</p>
                        </div>
                        
                        <div>
                        <img src="/images/sliderTeams.png" alt="" />
                            <p className="legend">Legend 2</p>
                        </div>
                        
                        <div>
                        <img src="/images/battleSlider.jpg" alt="" />
                            <p className="legend">Legend 3</p>
                        </div>
                        
                </Carousel>
        
    
    </div>
        )
    }
}

export default Hero;