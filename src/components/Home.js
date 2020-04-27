import React from 'react';
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
                <div className="home">
                   <div className="container">
                       <div className="row">
    
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <h3>Home</h3>
                                <div className="seprator"></div>
                            </div>
    
                            {
                                this.state.homeData.map(
                                    (home, i) => {
                                        return(
                                            <div className="col-sm-12 col-md-12 col-lg-12 px-0" key={i}>
                                                {home}
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


export default Home;