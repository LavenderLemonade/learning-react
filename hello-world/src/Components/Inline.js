import React from 'react'

//this is where you make an object and then do the thing

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Inline() {
  return (
    <div>
        <h1 style = {heading}> Inline </h1>
    </div>
  )
}

export default Inline
