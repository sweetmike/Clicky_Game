import React, { Component } from 'react';
import Navbar from './Navbar';
import Container from './Container';
import Footer from './Footer';
import Banner from './Banner';

class Home extends Component {
    state = {
        score: 0,
        highScore: 0
    }

    render () {
        const state = this.state;
        return (
            <div>
                <Navbar />
                <Banner />
                <Container />
                <Footer />
            </div>
        )
    }
};



export default Home;