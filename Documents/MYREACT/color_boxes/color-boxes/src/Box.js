import React, { Component } from 'react'
import './Box.css';

export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {color: 'purple'};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {

    }
    render() {
        return (
            <div className="Box" style={{backgroundColor: this.state.color}}onClick={this.handleClick}>
                <h1>boxes</h1>
            </div>
        )
    }
}
