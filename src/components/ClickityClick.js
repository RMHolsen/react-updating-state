// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
    constructor() {
    // whenever a new instance of this class is created, this is what it builds
        super();
        // inherits from component
        this.state = {
        // sets initial state
            hasBeenClicked: false
        };
    }

    handleClick = () => {
    // this is where the state is updated
        this.setState({
            hasBeenClicked: true
        })
    /* assigning state on multiple levels 
        this.setState({
            addressInfo: {
                ...this.state.addressInfo,
                city: 'New York City'
            }
        })

        in this case addressInfo: is the first level
        this.state.addressInfo picks up the data contained within addressInfo
        city: 'New York City' either assigns or reassigns a value to the key of city
    */

    /* assigning state based on previous state

    this.setState(previousState => {
        return {
            count: previousState + 1
        }
    })

    */
    };

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}

export default ClickityClick;