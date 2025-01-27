import React from 'react'

const Weather = ({temperature}) => {
    let weatherMessage = "";

    if (temperature > 25) {
        weatherMessage= "It's hot outside"
    }
    else if(temperature < 25 && temperature > 15) {
        weatherMessage = "It's nice outside"
    }
    else {
        weatherMessage = "It's cold outside"
    }

  return (
    <div>
        <h1>Today's Temperature is {temperature} °C</h1>
        <h2>{weatherMessage}</h2>
    </div>
  )
}

export default Weather