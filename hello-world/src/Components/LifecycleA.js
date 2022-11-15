import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Sam'
      }

      console.log('Lifecycle A Constructor')
    }

    changeState = () => {
        this.setState({
            name: 'CodeEvolution'
        })
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log('Lifecycle A getDerivedStateFromProps')
        return null
    }
    
    componentDidMount()
    {
        console.log('Lifecycle A componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('Lifecycle A shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecycle A getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('Lifecycle A componentDidUpdate')
    }

  render() {
    console.log('Lifecycle A Render')
    return (
      <div>
        <div> Lifecycle A </div>
        <button onClick = {this.changeState}> Change State</button>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA
