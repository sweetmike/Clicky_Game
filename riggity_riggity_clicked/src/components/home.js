import React, { Component } from 'react';
import Navbar from './Navbar';
import Container from './Container';
import Footer from './Footer';
import Banner from './Banner';
import images from '../images';


class Home extends Component {
    state = {
        score: 0,
        highScore: 0,

        allCharacters: this.shuffleArray(),

        wasClicked: [],

        shake: false
    };

    // binds the current this context to checkClicked to have access to the current state
    // when passed down to the Character component
    clickEvent = this.checkClicked.bind(this);

    shuffleArray() {
        // creates a copy of the current characters array to modify it by value, and not by reference
        const newArr = images.slice();
    
        // will store the shuffled array
        const shuffleArr = [];
    
        // each loop through an index gets spliced from newArr, reducing its length
        // gets a random index based off the current length of newArr
        // splices the value from newArr, and pushes it to shuffleArr
        while (newArr.length > 0) {
          shuffleArr.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
        }
        return shuffleArr;
    }

    checkClicked(clickedElem) {
        // creates a copy of the wasClicked array to modify it by value, and not by reference. wasClicked stores all previous clicked images
        const prevState = this.state.wasClicked.slice();
    
        // shuffles the images
        const shuffled = this.shuffleArray();
    
    
        // if the clicked item is not in wasClicked, then it hasn't been clicked and the score is increased
        if (!this.state.wasClicked.includes(clickedElem)) {
        
          // adds the clicked item to wasClicked to track that it has been clicked
            prevState.push(clickedElem);
        }
    
        // resets the current score if the same element was clicked twice
        if (this.state.wasClicked.includes(clickedElem)) {

            return this.setState({
            allCharacters: shuffled,
            wasClicked: [],
            shake: true
            });
        }
    
        // if this runs, then the same element has not been clicked twice and the score is increased
        this.setState({
            allCharacters: shuffled,
            wasClicked: prevState,
            shake: false
        });
    
        
    }

    render () {
        const state = this.state;
        return (
            <div>
                <Navbar />
                <Banner />
                <Container 
                    shake={state.shake}
                    characters={state.allCharacters} 
                    clickEvent={this.clickEvent}
                />
                <Footer />
            </div>
        )
    }
}

export default Home;