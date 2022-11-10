import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    //   this.clickHandler = this.clickHandler.bind(this); //this is that third approach, doing it here 
    }
    // clickHandler(){
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    // }
    //so, this method doesn't work because of the way JS sees this setState keyword
    // not how React sees it, so we're going to go over a few ways to get around this 
//-------------------------------------------------------------------------------------------------------
    //method 1
//     clickHandler(){
//         this.setState({
//             message: 'Goodbye!'
//         })
//         console.log(this)
//     }
    
//   render() {
//     return (
//       <div>
//         <div>{this.state.message}</div>
//         <button onClick = {this.clickHandler.bind(this)}>Click </button>
//       </div>
//     )
//   }
// }
//this coulkd be a bit sucky just becuase it has to re-render whenever the state changes, and couple
//  impact perofrmance for a bigger application
//-------------------------------------------------------------------------------------------------------
// method 2
// clickHandler(){
//     this.setState({
//         message: 'Goodbye!'
//     })
//     console.log(this)
// }

// render() {
// return (
//   <div>
//     <div>{this.state.message}</div>
//     <button onClick = { () => this.clickHandler()}>Click </button>
//   </div>
// )
// }
// }
//similarly, there are performance issues 
//-------------------------------------------------------------------------------------------------------
//method 3
//binding happens once in the constructor, and thuis it will only happen once 
// clickHandler(){
//     this.setState({
//         message: 'Goodbye!'
//     })
//     console.log(this)
// }

// render() {
// return (
//   <div>
//     <div>{this.state.message}</div>
//     <button onClick = {this.clickHandler}>Click </button>
//   </div>
// )
// }
// }
//-------------------------------------------------------------------------------------------------------
//Method 4
clickHandler = () => {this.setState({ message: 'Goodbye!'})
}

render() {
return (
  <div>
    <div>{this.state.message}</div>
    <button onClick = {this.clickHandler}>Click </button>
  </div>
)
}
}

export default EventBind

//first two might not be the best
//second is a little more viable
//documentation likes 3 or 4 
//binding in the constructor seems like it will be the best 