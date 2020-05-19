import React from 'react';
import Slider from '../layout/Slider';
import '../assets/css/home.css';

import axios from 'axios';

class Home extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            homeData: []
        };
    }

    componentDidMount() {
        const url = "";

        axios.get(url).then(responce => {
            console.log(responce);

            // getting array from responce 
            let home = responce.data;
            
            // setting the planets state with api responce 
            this.setState({
                homeData: home
            });
        })
    }

    render() {
        return(
            <div>
                <Slider />

                <div className="home">
                   <div className="container">
                       <div className="row justify-content-center">
    
                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <div className="main">

                                    <div className="buttons">
                                        <a href='#'>Delivery</a> <a href='#'>Take Away</a>
                                    </div>

                                    <select>
                                        <option value="volvo">Select City</option>
                                        <option value="saab">Karachi</option>
                                        <option value="opel">Lahore </option>
                                        <option value="audi">Faisalabad</option>
                                        <option value="saab">Rawalpindi</option>
                                        <option value="opel">Hyderabad </option>
                                        <option value="audi">Quetta</option>
                                        <option value="audi">Peshawar</option>
                                        <option value="audi">Gujranwala</option> 
                                    </select>

                                    <select>
                                        <option value="volvo">Select Area</option>
                                        <option value="saab">Liaquatabad</option>
                                        <option value="opel">Nazimabad </option>
                                        <option value="audi">Gulzar-e-Hijri</option>
                                        <option value="saab">Gulshan-e-Iqbal</option>
                                        <option value="opel">Jamshed Quarters </option>
                                        <option value="audi">Lyari</option>
                                        <option value="audi">Mango Pir</option>
                                        <option value="audi">Shah Faisal</option> 
                                    </select>

                                    <div className='btn1'>
                                        <a href="#">Oder Now</a>
                                    </div>
                                </div>
                            </div>
     
                       </div>
                   </div>
                </div>


 
            </div>
    
        ); 
    }

}


export default Home;