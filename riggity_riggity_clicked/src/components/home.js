import React, { Component } from 'react';


class Home extends Component {
    state = {
        score: 0,
        highScore: 0
    }

    render () {
        const state = this.state;
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }
};



export default Home;