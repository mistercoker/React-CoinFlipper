import React, { Component } from 'react';
import { choice } from './helpers';


export default class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            {side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
            {side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            curCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin() {

    }
    handleClick(e) {
        this.flipCoin();
    }
    render() {
        return (
            <div>
                <h2>Let's Flip A Coin</h2>
                <button onClick={this.handleClick}>Flip A Coin</button>
                <p>Out of {this.state.nFlips} flips, there has been {this.state.nHeads} heads and {this.state.nTails} tails</p>
            </div>
        )
    }
}
