import React from 'react'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const nameList = names.map((name) => <h2> {name} </h2>)
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