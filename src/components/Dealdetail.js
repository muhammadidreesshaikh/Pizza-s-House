import React from 'react';
import '../assets/css/dealdetail.css';

import image from '../assets/img/d1.jpg';


import DealDataHolding from '../shared/services/deal-data-holding';

class Dealdetail extends React.Component{

    constructor(props) {
        super(props);
 
        this.state = {
            deal: {}
        };
    }

    componentDidMount() {
        this.dealData();
    }

    dealData() {
        let dealD = DealDataHolding.setData();

        this.setState({
            deal: dealD
        })
    }


    render() {
        return(
            <div>
                <div className="dealdetail">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-6">    
                                <div className='image'>
                                    <img src={this.state.deal.image} />
                                </div>
                            </div>

                            <div className="col-md-6">    
                                <div className="wrapper">
                                    <div className='row payment'>
                                        <h4>{this.state.deal.heading}</h4>
                                        {/* <h6>{this.state.deal.price}</h6> */}

                                        <form>
                                            <input type="number" id="quantity" name="quantity" min="1" max="7"/>
                                        </form>
                                    </div>

                                    <div className="cart">
                                        <a href="#">ADD TO CART </a>
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

export default Dealdetail;