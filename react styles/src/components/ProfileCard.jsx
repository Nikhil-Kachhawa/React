import React from 'react'

const ProfileCard = () => {
let style = {backgroundColor : "gray", padding : '15px', borderRadius : '8px', color : 'black'}
  return (
    <div style = {style} >
        <h1>This is Second title</h1>
        <p>This whole div is styled using inline styles with object</p>
    </div>
  )
}

export default ProfileCard