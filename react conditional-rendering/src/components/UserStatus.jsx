import React from 'react'

const UserStatus = ({isAdmin, loggedIn}) => {
  return (
    <div>
        <h1>Hello! Welcome 
            {loggedIn && (isAdmin ? " Admin" : " User")}
            {!loggedIn && (!isAdmin ? "" : " Guest")}
        </h1>
    </div>
  )
}

export default UserStatus