import React from "react";

const Greet = (props) => {
console.log(props)
return (
    <div>
        <h1> Hello {props.name}! You are {props.heroName}!</h1> 
        {props.children} 
    </div>
    )
}

export default Greet //we use default so that we can change the name and stuff when we import it


/*this is the ES6 way of doing arrow functions */

//we're throwing it all into a div because we can only return one HTML element inside a Component