import React, { Component } from 'react'


class ClassClick extends Component {
    clickHanlder(){
        console.log('Button Clicked!')
    }
  render() {
    return (
      <div>
        <button onClick = {this.clickHanlder}> Click Me! </button>
      </div>
    )
  }
}

export default ClassClick
