import React from 'react'
import Weather from './components/Weather'
import UserStatus from './components/UserStatus'
import Greeting from './components/Greeting'

const App = () => {
  return (
    <div>
      <p>If-else example</p>
      <Weather temperature = {21}/>
      <p>&& operator</p>
      <UserStatus isAdmin = {false} loggedIn = {true}/>
      <p>Ternary operator</p>
      <Greeting timeOfDay = "Afternoon" />
    </div>
  )
}

export default App