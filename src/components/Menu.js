import React from 'react';
import '../assets/css/menu.css';
import { Link } from 'react-router-dom';

import axios from 'axios';

import image from '../assets/img/m.png';
import image1 from '../assets/img/m1.png';
import image2 from '../assets/img/m2.png';
import image3 from '../assets/img/m3.png';
import image4 from '../assets/img/m4.png';
import image5 from '../assets/img/m5.png';
import image6 from '../assets/img/m6.png';
import image7 from '../assets/img/m9.png';
import image8 from '../assets/img/m10.png';



// arary
let MenuData = [
    {
        image: image,
        heading:'Wild Beast (Meat Lover)',
        text: 'Cabanossi beef, onion, green pepper & jalapeno',
        price: 'Rs. 540/-',
        button: 'ADD TO CARD '
    },
    {
        image: image1,
        heading:'The Boss (Afghani Tikka)',
        text: 'Afghani chicken, onion, jalapeno & mushroom',
        price: 'Rs. 600/-',
        button: 'ADD TO CARD '
    },
    {
        image: image2,
        heading:'1000 Ocean (Pepperoni Pizza)',
        text: 'Sumptious pepperoni, cheese & tomtato sauce',
        price: 'Rs. 740/-',
        button: 'ADD TO CARD '
    },
    {
        image: image3,
        heading:'Twista (Creamy Tikka)',
        text: 'Creamy mayo sauce, chicken tikka, onion & cheese',
        price: 'Rs. 500/-',
        button: 'ADD TO CARD '
    },
    {
        image:  image4,
        heading:'The King (Malai Boti)',
        text: 'Malai Boti, Green Peppers,Onions, & Mushrooms',
        price: 'Rs. 850/-',
        button: 'ADD TO CARD '
    },
    {
        image: image5,
        heading:'Rancheeza (Creamy)',
        text: 'House Ranch Sauce, Chicken Fajita Chunks, Jalapeno,',
        price: 'Rs. 900/-',
        button: 'ADD TO CARD '
    },
    {
        image: image6,
        heading:'Sizzling Sriracha (Spicy)',
        text: 'House Sriracha Sauce, Chicken Tikkah Chunks, Jalapeno,',
        price: 'Rs. 630/-',
        button: 'ADD TO CARD '
    },
    {
        image: image7,
        heading:'Smokey BBQ',
        text: 'House BBQ Sauce, Chicken Tikka, Jalapeno, Black Olives',
        price: 'Rs. 800/-',
        button: 'ADD TO CARD '
    },
    {
        image: image8,
        heading:'Cheesy Blastic (Cheese Pizza)',
        text: 'Cheese, cheese & cheese',
        price: 'Rs. 920/-',
        button: 'ADD TO CARD '
    }
   
]
class Menu extends React.Component{
 
    constructor(props) {
        super(props);

        this.state = {
            menuData: []
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
                
                <div className="menu">
                    <div className="container">
                        <div className="row">

                           { 
                               MenuData.map( 
                                   (menu, i) => {
                                       return(
                                            <div className="col-md-4" key={i}>
                                                <div className ="main">
                
                                                    <div className='image'>
                                                        <img src={menu.image} />
                                                    </div>
                    
                                                    <div className="wrapper">
                                                        <h2>{menu.heading}</h2>
                                                        <p>{menu.text}</p>
                                                        <h6>{menu.price}</h6>
                     
                                                        <div className="press">
                                                            <Link to="/menu">{menu.button}</Link>
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



export default Menu;