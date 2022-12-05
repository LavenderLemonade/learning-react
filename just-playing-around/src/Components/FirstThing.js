import React, { Component } from 'react'
import './firstSheet.css'

class FirstThing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mouseIn: false
        }
        this.mouseHandler = this.mouseHandler.bind(this);
    }

    mouseHandler() {
        this.className = 'spinner'
    }
    render() {
        return (
            <div class='thing spinner' onMouseEnter={this.mouseHandler}>
                This is a div within the FirstThing Component
            </div>
        )
    }
}

export default FirstThing
