import React from '../../../node_modules/react';
import './Hero.css';
import Header from '../Header/Header'
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from '../../../node_modules/react-responsive-carousel';
import { Link } from '../../../node_modules/react-router-dom';

class Hero extends React.Component {
    render(){
        return(
        <div>
           
                <Header/>
                {/* <h1>Gamer World</h1> */}
                 {/* <nav>
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    </ul>
                </nav> */}
            

            <Carousel className="Carousel">
                        <div className="slide1"></div>
                        
                        <div className="slide2"></div>
                        
                        <div className="slide3">
                            <img className='images'/>
                        </div>
                        
                </Carousel>
        
    
    </div>
        )
    }
}

export default Hero;