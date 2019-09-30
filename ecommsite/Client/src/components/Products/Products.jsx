// import products from '../../products.json';
import React from 'react';
// import Header from './components/Header/Header';
import "./products.css";
import Video from '../ReactVideo/Video';


class Products extends React.Component {
   state = {
       items:[]
   }
   
   componentDidMount(){
       fetch('http://localhost:3002/api/products')
       .then(res => res.json())
       .then(product => {
        //    console.log(product)
            this.setState({items: product})
            // console.log(this.state)

            // this.state.map((index, item) => {
            //     console.log(item)
            //     console.log(index)
            // })
       
        })
       .catch(err => err)
   }
   
    render(){
    return (
        
        <div className= "main_grid">
        {this.state.items.map((item, index) => {
           console.log(item)
        //    console.log(index)
             
             return (
                <div key={index} className= {item.image_id}>
                    <a href={item.hyperlink} target= "_blank" className="overlay">
                        <p>{item.price}</p>
                    </a>
                </div>
                )
            })
            }
        </div>      
    )

 }
}

export default Products;




// this.state.map((index, item) => {
            //     console.log(item)
            //     console.log(index)
            // })