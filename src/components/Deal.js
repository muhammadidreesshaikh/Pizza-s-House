import React from 'react';
import '../assets/css/deal.css';
import { Link } from 'react-router-dom';

import axios from 'axios';

import image from '../assets/img/d1.jpg';
import image1 from '../assets/img/d4.jpg';
import image2 from '../assets/img/d2.jpg';
import image3 from '../assets/img/d5.jpg';
import image4 from '../assets/img/d3.jpg';
import image5 from '../assets/img/d6.jpg';


// arary
let DealData = [
    {
        image: image,
        heading:'Deal 1',
        price: 'Rs. 800/-',
        button: 'ADD TO CARD '
    },
    {
        image: image1,
        heading:'Deal 2',
        price: 'Rs. 1000/-',
        button: 'ADD TO CARD '
    },
    {
        image: image2,
        heading:'Deal 3',
        price: 'Rs. 950/-',
        button: 'ADD TO CARD '
    },
    {
        image: image3,
        heading:'Deal 4',
        price: 'Rs. 1100/-',
        button: 'ADD TO CARD '
    },
    {
        image:  image4,
        heading:'Deal 5',
        price: 'Rs. 750/-',
        button: 'ADD TO CARD '
    },
    {
        image: image5,
        heading:'Deal 6',
        price: 'Rs. 1250/-',
        button: 'ADD TO CARD '
    }

]
class Deal extends React.Component{
 
    constructor(props) {
        super(props);

        this.state = {
            dealData: []
        };
    }

    // componentDidMount() {
    //     const url = "";

    //     axios.get(url).then(responce => {
    //         console.log(responce);

    //         // getting array from responce 
    //         let Menu = responce.data;
            
    //         // setting the planets state with api responce 
    //         this.setState({
    //             MenuData: Menu
    //         });
    //     })
    // }


    render() { 
        return(
            <div>
                
                <div className="deals">
                    <div className="container">
                        <div className="row">

                           { 
                               DealData.map( 
                                   (deal, i) => {
                                       return(
                                            <div className="col-md-4" key={i}>
                                                <div className ="main">
                
                                                    <div className='image'>
                                                        <img src={deal.image} />
                                                    </div>
                    
                                                    <div className="wrapper">
                                                        <h2>{deal.heading}</h2>  <h6>{deal.price}</h6>
                     
                                                        <div className="press">
                                                            <Link to="/dealdetail">{deal.button}</Link>
                                                        </div>
                                                    </div>
                
                                                </div>
                                            </div>
                                       )
                                   }
                               )
                           }

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}



export default Deal;