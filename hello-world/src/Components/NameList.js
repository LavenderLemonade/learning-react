import React from 'react'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const nameList = names.map(name => <h2 key = {name}> {name} </h2>)
  return (
    <div>
        {/* {
            names.map((name) => <h2> {name} </h2>) so we could do it here or up there 
        } */}

        {nameList} 
    </div>
  )
}

export default NameList

//refactoring the JSX to be outside of the render method is a good thing to do