import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

    render(){
        return this.state.isLoggedIn && <div> Welcome Sam!</div>
    }



    //-------------------------------------------------------------------------
    //------------------Ternary Operator Method------------------------------
//   render() {
//     return this.state.isLoggedIn ? (
//         <div> Welcome Sam </div> ): (<div> Welcome Guest</div>
//     )
    //------------------------------------------------------------------
    //------------------Element Variable Method -------------------------
    // let message
    // if (this.state.isLoggedIn){
    //     message = <div> Welcome Sam!</div>
    // } else {
    //     message = <div> Welcome Guest! </div>
    // }

    // return <div> {message} </div>
    //-------------------------------------------------------------------
    //---------------------If/Else Method-----------------------
    // }
    //   if(this.state.isLoggedIn){
    //       return (
    //           <div> Welcome Sam! </div>
    //       )
    //   } else {
    //       return (
    //           <div> Welcome Guest! </div>
    //       )
    //   }
    // return (
    //   <div>
    //     <div> Welcome Sam! </div>
    //     <div> Welcome Guest! </div> so this is the if/else approach
    //   </div>
    // )
    //---------------------------------------------------------------
  
}

export default UserGreeting