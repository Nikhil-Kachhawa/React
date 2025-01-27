Conditional Rendering :
------------------------
- Conditional rendering allows us to dynamically display different UI components or content based on specific conditions.
- This enables us to create more interactive and responsive user experiences.
- We have three ways to do it -
1. If-else statement
2. Ternary operator
3. Using AND

- App.jsx
```
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
```

1. If-else statement

```
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
```

2. Ternary operator

```
const Greeting = ({timeOfDay}) => {
  return (
    <div>
        <h1>{ timeOfDay === "Morning" ? "Good Morning" : timeOfDay === "Afternoon" ? "Good Afternoon" : "Good Evening" } 
        </h1>
    </div>
  )
}
```

3. Using AND

```
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
```