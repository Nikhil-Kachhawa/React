import React, {useState} from 'react'

const Profile = () => {
  
    const [user, setUser] = useState({})
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const handleSubmit = (event) => 
    {
        event.preventDefault()
        if(name.trim() && age >= 0){
            setUser({name, age})
        }
        setName('')
        setAge('')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" value={name} name="name" id="name" onChange={(e) => setName(e.target.value)} />
            <br />
            <label htmlFor="age">Age:</label>
            <input type="number" value={age} name="age" id="age" onChange={(e) => setAge(Number(e.target.value))} />
            <br />
            <button type="submit">Submit</button>
        </form>
        <h1>: Profile Information :</h1>
        <ul>
            <li> Name : {user.name}</li>
            <li> Age : {user.age}</li>
        </ul>
    </div>
  )
}

export default Profile