import React, {useState, useEffect} from 'react'

const App = () => {

  const [data, setData] = useState([])
  useEffect(
    () => {
      async function getData () {
        const response  = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        setData(data)
        // console.log(data)
      }
      getData()  
    }
    
  , [])

  return (
    <div>

    <h1>: Random Users of the Day :</h1>
    <ul>
      {
        data.map(
          (item) => (
            <div key={item.id}>
              <h2>Name : {item.name}</h2>
              <h3>Username : {item.username}</h3>
              <h3>Email : {item.email}</h3>
              <br />
            </div>
          )
        )
      }
    </ul>  
    </div>
  )
}

export default App