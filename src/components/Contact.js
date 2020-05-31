import React from 'react';
import '../assets/css/contact.css';


function Contact() {
    return(
        <div>
            <div className="contact">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-md-12">
                            <input type="name" placeholder="Full Name"/>
                        </div>

                        <div className="col-md-12">
                            <input type="name" placeholder="Email Here"/>
                        </div>

                        <div className="col-md-12">
                            <input type="name" placeholder="Contact No."/>
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

                        <div className="col-md-12 name">
                            <textarea rows="5" placeholder="Your Message"></textarea>
                        </div>
                    
                        <div className="cart">
                            <a href="#">Send Message</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    ); 
}


export default Contact;