import React from 'react';
import Navbar from "./Navbar/Navigation";

import "./About.css"



const About = () => {
    return (
        <div>
            <Navbar />
            <div className='image'>
                <div className='head'>
                <h1 className='header1'>Blockchain Based Online Voting System</h1>
                <h3 className='header2'>A Voting System deployed on Ethereum Testnet</h3>
            
</div>
            </div>
        </div>

    );
};

export default About;