import React, {useState, useEffect} from 'react'

const FetchDataEffect = () => {

  const [data, setData] = useState([])  
  useEffect(
    () => {
        async function getData(){
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()
            // console.log(data)
            setData(data)
        }
    getData()    
  }, [])  

  return (
    <div>
        {
            data.map(
                (item) => (
                    item.id === 1 && <p key= {item.id} >Title : {item.title}</p>
                )
            )
        }
    </div>
  )
}

export default FetchDataEffect