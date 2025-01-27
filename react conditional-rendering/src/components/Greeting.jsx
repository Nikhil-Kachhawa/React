import React from 'react'

const Greeting = ({timeOfDay}) => {
  return (
    <div>
        <h1>{ timeOfDay === "Morning" ? "Good Morning" : timeOfDay === "Afternoon" ? "Good Afternoon" : "Good Evening" } 
        </h1>
    </div>
  )
}

export default Greeting